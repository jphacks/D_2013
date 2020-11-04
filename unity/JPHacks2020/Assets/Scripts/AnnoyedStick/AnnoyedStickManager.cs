using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace AnnoyedStick
{
    public class AnnoyedStickManager : MonoBehaviour
    {

        private float _startTime = 4;
        private float _timer = 0;
        [SerializeField] private GameObject _startView;
        [SerializeField] private GameObject _startMessage;
        [SerializeField] private GameObject _scooreView;
        [SerializeField] private GameObject _restartView;
        [SerializeField] private Button _startButton;
        [SerializeField] private Button _endButton;
        [SerializeField] private Button _restartButton;
        public bool isPlay = false;
        private bool _isTimerCount = true;
        public bool isClear = false;
        public bool isRestart = false;

        // Start is called before the first frame update
        void Start()
        {
            _startButton.onClick.AddListener(UiFalse);
            _endButton.onClick.AddListener(ScoreUi);
            _restartButton.onClick.AddListener(Restart);
        }

        // Update is called once per frame
        void Update()
        {
            if (_timer >= _startTime - 1)
            {
                _startView.SetActive(false);
                if (_timer >= _startTime)
                {
                    _startMessage.SetActive(false);
                    isPlay = true;
                    Debug.Log("START");
                    _isTimerCount = false;
                    _timer = 0;
                }
            }

            if (_isTimerCount) _timer += Time.deltaTime;

            if (isRestart) _restartView.SetActive(true);
            if (isClear)
            {
                Debug.Log("CLEAR");
                _scooreView.SetActive(true);
                isPlay = false;
                isClear = false;

            }
        }
        void UiFalse()
        {
            _startView.SetActive(false);
        }
        void ScoreUi()
        {
            Debug.Log("HOGEHOGE");
        }
        void Restart()
        {
            _restartView.SetActive(false);
            isRestart = false;
            isPlay = true;
            Debug.Log("RESTART");
        }
    }
}

