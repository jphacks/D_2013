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

    // Start is called before the first frame update
    void Start()
    {
        SetNum();

        /*for (int i = 0; i < buttons.Length; i++)
        {
            buttons[i].onClick.AddListener(() => OnClick(i));
        }*/
        buttons[0].onClick.AddListener(() => OnClick(0));
        buttons[1].onClick.AddListener(() => OnClick(1));
        buttons[2].onClick.AddListener(() => OnClick(2));
        buttons[3].onClick.AddListener(() => OnClick(3));
        buttons[4].onClick.AddListener(() => OnClick(4));
        buttons[5].onClick.AddListener(() => OnClick(5));
        buttons[6].onClick.AddListener(() => OnClick(6));
        buttons[7].onClick.AddListener(() => OnClick(7));
        buttons[8].onClick.AddListener(() => OnClick(8));

    }

    // Update is called once per frame
    void Update()
    {
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
                buttons[i].GetComponent<Image>().color = new Color(255, 255, 255);
            }

            if (_previewCount > _pos.Length - 1)
            {
                _isPreview = false;
                _isPlay = true;
                _previewCount = 0;
            }
            else
            {
                if(_isRed) buttons[_pos[_previewCount]].GetComponent<Image>().color = new Color(255, 0, 0);
            }
        }
        _timer += Time.deltaTime;
    }

    void SetNum()
    {
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
                    Debug.Log("CLEAR");
                }
            }
            else
            {
                _count = 1;
                Debug.Log("ALERT");
                _isPlay = false;
                SetNum();
            }
        }
    }
}
