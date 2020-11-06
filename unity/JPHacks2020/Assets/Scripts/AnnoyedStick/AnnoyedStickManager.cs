using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Common;

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
        [SerializeField] private AudioSource _mainSource;
        [SerializeField] private AudioSource _seSource;
        [SerializeField] private AudioClip _bgmClip;
        [SerializeField] private AudioClip _clearClip;
        [SerializeField] private AudioSource _clickSource;

        // Start is called before the first frame update
        void Start()
        {
            _mainSource.clip = _bgmClip;
            _mainSource.Play();

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
                _seSource.clip = _clearClip;
                _seSource.Play();

                Debug.Log("CLEAR");
                _scooreView.SetActive(true);
                isPlay = false;
                isClear = false;

            }
        }
        void UiFalse()
        {
            _clickSource.Play();
            _startView.SetActive(false);
        }
        void ScoreUi()
        {
            _clickSource.Play();
            Debug.Log("HOGEHOGE");
            DefineData.SetData(true, DefineData.SCENE_NAME.GAME_E);
        }
        void Restart()
        {
            _clickSource.Play();
            _restartView.SetActive(false);
            isRestart = false;
            isPlay = true;
            Debug.Log("RESTART");
        }
    }
}

