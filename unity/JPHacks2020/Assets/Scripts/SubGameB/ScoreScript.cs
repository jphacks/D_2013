using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace Mole
{
    public class ScoreScript : MonoBehaviour
    {
        [SerializeField] Button[] moleButton;
        [SerializeField] Text scoretext;
        [SerializeField] GameObject clearText;
        [SerializeField] MoleAppearScript moleappearscript;

        public int score=0;
        private int _clearScore = 15;
        // Start is called before the first frame update
        void Start()
        {
            scoretext.text = score.ToString();

            clearText.SetActive(false);

            moleButton[0].onClick.AddListener(() => AddPoint(0));
            moleButton[1].onClick.AddListener(() => AddPoint(1));
            moleButton[2].onClick.AddListener(() => AddPoint(2));
            moleButton[3].onClick.AddListener(() => AddPoint(3));
            moleButton[4].onClick.AddListener(() => AddPoint(4));
            moleButton[5].onClick.AddListener(() => AddPoint(5));
            moleButton[6].onClick.AddListener(() => AddPoint(6));
            moleButton[7].onClick.AddListener(() => AddPoint(7));
            moleButton[8].onClick.AddListener(() => AddPoint(8));
            

           

        }

        // Update is called once per frame
        void Update()
        {
            scoretext.text = score.ToString("00");
            if (score >= _clearScore) {
                clearText.SetActive(true);
                moleappearscript.enabled = false;
            }
        }

        

        private void AddPoint(int num) {

            
                Debug.Log(num);
            if (moleButton[num].transform.GetChild(0).gameObject.activeSelf)
            {
                moleButton[num].transform.GetChild(0).gameObject.SetActive(false);
                score++;

            }
            else if (moleButton[num].transform.GetChild(1).gameObject.activeSelf)
            {
                moleButton[num].transform.GetChild(1).gameObject.SetActive(false);
                score--;
            }
        

           
        }
    }
}
