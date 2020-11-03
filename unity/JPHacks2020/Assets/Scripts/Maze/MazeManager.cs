using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace Maze
{
    public class MazeManager : MonoBehaviour
    {
        //trueならP1が操作
        [SerializeField] private int _playerId;
        [SerializeField] private GameObject[] _Camera;

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

        void OnEnable()
        {
            
        }

        // Start is called before the first frame update
        void Start()
        {
            for(int i = 0;i < _Camera.Length; i++)
            {
                _Camera[i].SetActive(false);
            }
            _Camera[_playerId - 1].SetActive(true);
            startButton.onClick.AddListener(UiFalse);
            endButton.onClick.AddListener(ScoreUi);
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
    }
}

