﻿using System.Collections.Generic;
using UnityEngine;
using WebSocketSharp;
using UniRx;
using Common;

namespace UnityConnection
{
    public class PositionSync : SingletonMonoBehaviour<PositionSync>
    {
        [SerializeField] private string _serverAddress;

        public string _id { private get; set; }

        public Transform _syncObjTransform { private get; set; }
        [SerializeField] private SYNC_PHASE _nowPhase;

        public Queue<Vector3> PosQueue = new Queue<Vector3>();

        private WebSocket _ws;

        public enum SYNC_PHASE
        {
            Idling,
            Syncing,
        }

        // Start is called before the first frame update
        public void StartReciever()
        {
            _nowPhase = SYNC_PHASE.Idling;

            var cTransformValue = gameObject.ObserveEveryValueChanged(_ => _syncObjTransform.position);
            cTransformValue.ThrottleFirstFrame(5).Subscribe(pos => OnChangedTargetTransformValue(pos));

            OnSyncStartButtonDown();
        }

        public void OnSyncStartButtonDown()
        {
            var ca = "ws://" + _serverAddress;
            Debug.Log("Connect to " + ca);
            _ws = new WebSocket(ca);

            _ws.OnMessage += (object sender, MessageEventArgs e) => {
                print(e.Data);
                string[] userPos = JsonParser.ReturnString(e.Data);
                Vector3 pos = new Vector3(float.Parse(userPos[0]), float.Parse(userPos[1]), float.Parse(userPos[2]));
                PosQueue.Enqueue(pos);
            };

            _ws.OnError += (sender, e) =>
            {
                Debug.Log("WebSocket Error Message: " + e.Message);
                _nowPhase = SYNC_PHASE.Idling;
            };

            _ws.OnClose += (sender, e) =>
            {
                Debug.Log("Disconnected Server");
            };

            _ws.Connect();

            _nowPhase = SYNC_PHASE.Syncing;
        }

        public void OnSyncStopButtonDown()
        {
            _ws.Close();
        }

        public void OnChangedTargetTransformValue(Vector3 pos)
        {
            if (_nowPhase == SYNC_PHASE.Syncing)
            {
                string data = JsonMaker.SendStringData(pos);
                _ws.Send(data);
            }
        }
    }
}
