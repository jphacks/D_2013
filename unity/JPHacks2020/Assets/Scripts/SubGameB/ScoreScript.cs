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

        private int _score=0;
        // Start is called before the first frame update
        void Start()
        {
            scoretext.text = _score.ToString();
            
            moleButton[0].onClick.AddListener(() => addPoint(0));
            moleButton[1].onClick.AddListener(() => addPoint(1));
            moleButton[2].onClick.AddListener(() => addPoint(2));
            moleButton[3].onClick.AddListener(() => addPoint(3));
            moleButton[4].onClick.AddListener(() => addPoint(4));
            moleButton[5].onClick.AddListener(() => addPoint(5));
            moleButton[6].onClick.AddListener(() => addPoint(6));
            moleButton[7].onClick.AddListener(() => addPoint(7));
            moleButton[8].onClick.AddListener(() => addPoint(8));
            

           

        }

        // Update is called once per frame
        void Update()
        {
            scoretext.text = "スコア : " +  _score.ToString();
        }

        

        private void addPoint(int num) {

            
                Debug.Log(num);
            if (moleButton[num].transform.GetChild(0).gameObject.activeSelf) {
                moleButton[num].transform.GetChild(0).gameObject.SetActive(false);
                _score++;
            }

           
        }
    }
}
