using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using WebSocketSharp;
using UniRx;
using UniRx.Triggers;
using Common;
using UnityEngine.UI;

namespace UnityConnection
{
    public class GameListIdReciever : MonoBehaviour
    {
        [SerializeField] private string _serverAddress;

        [SerializeField] private SYNC_PHASE _nowPhase;

        [SerializeField] private Text userNameText;

        public Queue<string> userName = new Queue<string>();

        private WebSocket _ws;

        public enum SYNC_PHASE
        {
            Idling,
            Syncing,
        }

        // Start is called before the first frame update
        void Start()
        {
            _nowPhase = SYNC_PHASE.Idling;
            DefineData.userName = "watayo";

            StartSync();

            this.UpdateAsObservable()
                .Where(_ => userName.Count > 0)
                .Subscribe(_ => {
                    var uName = userName.Dequeue();
                    userNameText.text = uName;
                    DefineData.SetUserName(uName);
                });
                
        }

        private void StartSync()
        {
            var ca = "ws://" + _serverAddress;
            Debug.Log("Connect to " + ca);
            _ws = new WebSocket(ca);

            _ws.OnMessage += (object sender, MessageEventArgs e) =>
            {
                print(e.Data);
                userName.Enqueue(JsonParser.ReturnIdName(e.Data));
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

        public void OnSyncStop()
        {
            _ws.Close();
        }
    }

}