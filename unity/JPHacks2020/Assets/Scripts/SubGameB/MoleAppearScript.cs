using System.Collections;
using System.Collections.Generic;
using UnityEngine;


namespace Mole
{
    public class MoleAppearScript : MonoBehaviour
    {
        [SerializeField] GameObject[] moles;
        [SerializeField] GameObject[] dummy;
        [SerializeField] ScoreScript scorescript;

        public Vector3[] posGhost;
        public Vector3[] posDummy;
        private int _apperPos;
        private float _interval;
        private float _timer = 0;
        public Vector3 initialPosGhost;
        public Vector3 initialPosDummy;
        private float _dummyrate;
        
        
        // Start is called before the first frame update
        void Start()
        {
            _interval = 2f;

            for (int i =0;i<9;i++) {
                posGhost[i] = moles[i].transform.GetChild(0).GetComponent<Transform>().localPosition;
                posDummy[i] = dummy[i].transform.GetChild(0).GetComponent<Transform>().localPosition;
            }
              
        }

        // Update is called once per frame
        void Update()
        {
            _timer += Time.deltaTime;

            if (scorescript.score >= 7) {

                _interval = 1f;

            }
          

            if (_timer >= _interval) {

                _apperPos = Random.Range(0,9);
                _dummyrate = Random.Range(0,4);


                
                    if (_dummyrate % 5 == 0)
                    {
                    moles[_apperPos].SetActive(false);
                    dummy[_apperPos].SetActive(true);

                    }
                    else
                    {
                    dummy[_apperPos].SetActive(false);
                    moles[_apperPos].SetActive(true);
                    }

                    StartCoroutine(Disapp(_apperPos));
                    
                    _timer = 0;
                
            }
            
        }
        
        private IEnumerator Disapp(int disPos) {
            yield return new WaitForSeconds(5f);
            if (moles[disPos].transform.GetChild(0).gameObject.activeSelf) {
                moles[disPos].transform.GetChild(0).localPosition = posGhost[disPos];
                moles[disPos].SetActive(false);
            } else if (moles[disPos].transform.GetChild(1).gameObject.activeSelf) {
                dummy[disPos].transform.GetChild(1).localPosition = posDummy[disPos];
                dummy[disPos].SetActive(false);
            }

        }
    }

}