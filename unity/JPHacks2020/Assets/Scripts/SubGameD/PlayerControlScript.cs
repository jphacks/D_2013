using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Common;

namespace Run
{
    public class PlayerControlScript : MonoBehaviour
    {
        private Rigidbody _rigidbody;
        [SerializeField] GameObject[] stages;
        [SerializeField] Button leftButton;
        [SerializeField] Button rightButton;

        [SerializeField] GameObject playerImage;

        [SerializeField] private GameObject startView;
        [SerializeField] private GameObject startMessage;
        [SerializeField] private GameObject scooreView;
        [SerializeField] private Button startButton;
        [SerializeField] private Button endButton;
        [SerializeField] private Button restartButton;
        [SerializeField] private GameObject restartView;
        [SerializeField] private AudioSource _clearSource;
        [SerializeField] private AudioSource _clickSource;
        public int lifeCount = 0;
        private float _gameTimer = 0;
        private Vector3 _startPos;
        int count;
        float _timer;
        [SerializeField] private Text _restartNum;
        [SerializeField] private Text _gameTime;
        [SerializeField] private Text _restartNum2;
        [SerializeField] private Text _gameTime2;
        bool isRestart = false;
        //private Vector3 _pos;

        private bool _start;

        private int _currentPos;
        private Vector3 _initialPos;
        private float _speed = 0.2f;
        
        // Start is called before the first frame update
        void Start()
        {
            _startPos = this.transform.position;
            _initialPos = transform.position; 
            _currentPos = 1;
            
            leftButton.onClick.AddListener(ToLeft);
            rightButton.onClick.AddListener(ToRight);

            startButton.onClick.AddListener(UiFalse);
            endButton.onClick.AddListener(ScoreUi);
            restartButton.onClick.AddListener(Restart);
        }

        // Update is called once per frame
        void Update()
        {


            if (_start)
            {
                transform.position += new Vector3(0, 0, _speed);
                transform.position = new Vector3(stages[_currentPos].transform.position.x, transform.position.y, transform.position.z);
                _gameTimer += Time.deltaTime;
            }
            //Debug.Log(_currentPos);
            if (isRestart)
            {
                _timer += Time.deltaTime;
                if (_timer >= 0.2f)
                {
                    playerImage.gameObject.GetComponent<SpriteRenderer>().enabled = false;
                    if (_timer >= 0.4f)
                    {
                        playerImage.gameObject.GetComponent<SpriteRenderer>().enabled = true;
                        _timer = 0;
                        count++;
                    }
                }

                if (count >= 3)
                {
                    count = 0;
                    this.gameObject.transform.position = _startPos;
                    playerImage.gameObject.GetComponent<SpriteRenderer>().enabled = true;
                    isRestart = false;
                    this.transform.position = _initialPos;
                    restartView.SetActive(true);
                }
            }
            _gameTime.text = "経過時間 :" +_gameTimer.ToString("f1") + "秒"; 
        }


        private void ToRight()
        {
            if (_currentPos <= 1)
            {
                _currentPos++;
            }
        }


        private void ToLeft()
        {
            if (_currentPos >= 1)
            {
                _currentPos--;
            }
        }
        private void OnCollisionEnter(Collision collision)
        {
            if (collision.gameObject.name == "GoalCube")
            {
                _start = false;
                Debug.Log("GOAL!");

                _clearSource.Play();
                scooreView.SetActive(true);
                _restartNum2.text = lifeCount.ToString() + "回";
                _gameTime2.text = _gameTimer.ToString("f1") + "秒";
            } 
        }
        private void OnTriggerEnter(Collider other)
        {
            if (other.gameObject.tag == "obstacle")
            {
                lifeCount++;
                _restartNum.text = "リスタート回数：" + lifeCount.ToString() + "回";

                //if (lifeCount >= 2)
                //{
                    isRestart = true;
                    _start = false;
                    
                    Debug.Log("Alert");
                //}
                //else
                //{
                //    isRestart = true;
                //    _start = false;
                //    Debug.Log("GameOver");
                //}
            }
        }


        void UiFalse()
        {
            _clickSource.Play();
            startView.SetActive(false);
            Invoke("GameStart", 2f);
        }

        void ScoreUi()
        {
            _clickSource.Play();
            Debug.Log("HOGEHOGE");
            DefineData.SetData(true, DefineData.SCENE_NAME.GAME_D);
        }

        void GameStart()
        {
            _start = true;
            startMessage.SetActive(false);
        }

        void Restart()
        {
            _clickSource.Play();
            restartView.SetActive(false);
            isRestart = false;
            _start = true;
            Debug.Log("RESTART");
        }
    }
}