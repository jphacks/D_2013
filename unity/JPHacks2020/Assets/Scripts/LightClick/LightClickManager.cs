using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LightClickManager : MonoBehaviour
{
    private int[] _pos = new int[5];
    private int _count = 1;
    private int _previewCount = 0;
    private bool _isPlay = false;
    private bool _isPreview = false;
    private bool _isRed = false;
    private int _nextPos;
    private float _timer;

    [SerializeField]private Button[] buttons;
    [SerializeField] private GameObject[] images;

    private float _startTime = 4;
    [SerializeField] private GameObject startView;
    [SerializeField] private GameObject startMessage;
    [SerializeField] private GameObject scooreView;
    [SerializeField] private Button startButton;
    [SerializeField] private Button endButton;
    [SerializeField] private GameObject restartView;

    [SerializeField] private AudioSource _clearSource;
    [SerializeField] private AudioSource _clickSource;

    // Start is called before the first frame update
    void Start()
    {
        for (int i = 0; i < buttons.Length; i++)
        {
            int count = i;
            buttons[i].onClick.AddListener(() => OnClick(count));
        }
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
                SetNum();
                startMessage.SetActive(false);
                _isPlay = true;
                Debug.Log("START");
                //_isTimerCount = false;
                _timer = 0;
            }
        }

        if (_isPreview)
        {
            if(_timer > 0.5f)
            {
                _isRed = false;
                if(_timer > 0.7f)
                {
                    _previewCount++;
                    _timer = 0;
                    _isRed = true;
                }
            }

            for(int i = 0; i < buttons.Length; i++)
            {
                //buttons[i].GetComponent<Image>().color = new Color(255, 255, 255);
                images[i].SetActive(false);
            }

            if (_previewCount > _pos.Length)
            {
                _isPreview = false;
                _isPlay = true;
                _previewCount = 1;
            }
            else
            {
                if (_isRed)
                {
                    //buttons[_pos[_previewCount -1]].GetComponent<Image>().color = new Color(255, 0, 0);
                    images[_pos[_previewCount -1]].SetActive(true);
                }
            }
        }
        _timer += Time.deltaTime;
    }

    void SetNum()
    {
        restartView.SetActive(false);
        for (int i = 0; i < _pos.Length; i++)
        {
            _pos[i] = Random.RandomRange(0, 9);
            Debug.Log(_pos[i]);
        }
        _nextPos = _pos[0];
        _isPreview = true;
        _timer = 0;
    }

    void OnClick(int num)
    {
        _clickSource.Play();
        Invoke("GetUpButton", 0.2f);
        images[num].SetActive(true);
        if (_isPlay)
        {
            if (num == _nextPos)
            {
                if (_count < _pos.Length)
                {
                    _nextPos = _pos[_count];
                    _count++;
                }
                else
                {
                    _isPlay = false;
                    scooreView.SetActive(true);
                    _clearSource.Play();
                }
            }
            else
            {
                _count = 1;
                restartView.SetActive(true);
                Debug.Log("ALERT");
                _isPlay = false;
                Invoke("SetNum", 1.5f);
            }
        }
    }

    void GetUpButton()
    {
        for (int i = 0; i < buttons.Length; i++)
        {
            //buttons[i].GetComponent<Image>().color = new Color(255, 255, 255);
            images[i].SetActive(false);
        }
    }
    void UiFalse()
    {
        _clickSource.Play();
        startView.SetActive(false);
    }
    void ScoreUi()
    {
        _clickSource.Play();
        Debug.Log("HOGEHOGE");
    }
}
