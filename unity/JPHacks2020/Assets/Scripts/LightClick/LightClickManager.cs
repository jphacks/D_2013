using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LightClickManager : MonoBehaviour
{
    int[] pos = new int[5];
    int count = 1;
    int previewCount = 0;
    bool isPlay = false;
    bool isPreview = false;
    bool isRed = false;
    int nextPos;
    float timer;

    [SerializeField]private Button[] buttons;

    // Start is called before the first frame update
    void Start()
    {
        SetNum();

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
        if (isPreview)
        {
            if(timer > 0.5f)
            {
                isRed = false;
                if(timer > 0.7f)
                {
                    previewCount++;
                    timer = 0;
                    isRed = true;
                }
            }

            for(int i = 0; i < buttons.Length; i++)
            {
                buttons[i].GetComponent<Image>().color = new Color(255, 255, 255);
            }
            if(previewCount <= 4 && isRed)
            {
                buttons[pos[previewCount]].GetComponent<Image>().color = new Color(255, 0, 0);

            }

            if (previewCount > 4)
            {
                isPreview = false;
                isPlay = true;
                previewCount = 0;
            }
        }
        timer += Time.deltaTime;
    }

    void SetNum()
    {
        for (int i = 0; i < 5; i++)
        {
            pos[i] = Random.RandomRange(0, 9);
            Debug.Log(pos[i]);
        }
        nextPos = pos[0];
        isPreview = true;
        timer = 0;
    }

    void OnClick(int num)
    {
        if (isPlay)
        {
            if (num == nextPos)
            {
                if (count < 5)
                {
                    nextPos = pos[count];
                    count++;
                }
                else
                {
                    Debug.Log("CLEAR");
                }
            }
            else
            {
                count = 1;
                Debug.Log("ALERT");
                isPlay = false;
                SetNum();
            }
        }
    }
}
