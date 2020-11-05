using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityConnection;

namespace Maze
{
    public class MazeManager : MonoBehaviour
    {
        //trueならP1が操作
        [SerializeField] private int _playerId;
        [SerializeField] private GameObject[] _camera;
        // 要素数0:Player1, 要素数1:Player2
        [SerializeField] private GameObject[] _playerObject;
        private int _playerNum = 2;
        private float _startTime = 4;
        private float _timer = 0;
        [SerializeField] private GameObject startView;
        [SerializeField] private GameObject startMessage;
        [SerializeField] private GameObject scooreView;
        [SerializeField] private Button startButton;
        [SerializeField] private Button endButton;
        public bool isPlay = false;
        private bool _isTimerCount = true;
        public bool isClear = false;


        // Start is called before the first frame update
        void Start()
        {
            _playerNum = _playerObject.Length;
            PlayerSetUp();
            startButton.onClick.AddListener(UiFalse);
            endButton.onClick.AddListener(ScoreUi);
            PositionSync.Instance.StartReciever();
        }

        // Update is called once per frame
        void Update()
        {
            if (_timer >= _startTime - 1)
            {
                startView.SetActive(false);
                if (_timer >= _startTime)
                {
                    startMessage.SetActive(false);
                    isPlay = true;
                    Debug.Log("START");
                    _isTimerCount = false;
                    _timer = 0;
                }
            }
            if(_isTimerCount)_timer += Time.deltaTime;
            if (isClear)
            {
                Debug.Log("CLEAR");
                scooreView.SetActive(true);
                isPlay = false;
                isClear = false;
            }
        }

        void UiFalse()
        {
            startView.SetActive(false);
        }
        void ScoreUi()
        {
            Debug.Log("HOGEHOGE");
        }

        // 通信から送られてきたid割り振りを行うための関数
        public void SetPlayerId(int id)
        {
            _playerId = id;
        }

        private void PlayerSetUp()
        {
            for (int i = 0; i < _camera.Length; i++)
            {
                _camera[i].SetActive(false);
                _playerObject[i].GetComponent<OwnMazePlayer>().enabled = false;
                _playerObject[i].GetComponent<OpponentMazePlayer>().enabled = false;
            }
            _camera[ElementNumLogic(_playerId, _playerNum)].SetActive(true);
            PositionSync.Instance._syncObjTransform = _playerObject[ElementNumLogic(_playerId, _playerNum)].transform;
            PositionSync.Instance._id = _playerId.ToString();
            _playerObject[ElementNumLogic(_playerId, _playerNum)].GetComponent<OwnMazePlayer>().enabled = true;
            _playerObject[ElementNumLogic(_playerId, _playerNum)].GetComponent<OpponentMazePlayer>().enabled = false;
            for (int i = 0; i < _playerNum; i++)
            {
                if ((i + 1) == _playerId) continue;
                _playerObject[ElementNumLogic(i + 1, _playerNum)].GetComponent<OwnMazePlayer>().enabled = false;
                _playerObject[ElementNumLogic(i + 1, _playerNum)].GetComponent<OpponentMazePlayer>().enabled = true;
            }
        }

        private int ElementNumLogic(int id, int num)
        {
            return ((id % num) + (num - 1)) % num;
        }
    }
}

