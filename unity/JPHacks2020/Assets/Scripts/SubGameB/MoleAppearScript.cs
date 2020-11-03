using System.Collections;
using System.Collections.Generic;
using UnityEngine;


namespace Mole
{
    public class MoleAppearScript : MonoBehaviour
    {
        [SerializeField] GameObject[] moles;
        [SerializeField] GameObject[] dummy;
        

        private int _apperPos;
        private float _interval;
        private float _timer = 0;

        private float _dummyrate;
        private bool[] _appcheck = new bool[9];
        
        // Start is called before the first frame update
        void Start()
        {
            _interval = 2f;
           
        }

        // Update is called once per frame
        void Update()
        {
            _timer += Time.deltaTime;

          

            if (_timer >= _interval) {

                _apperPos = Random.Range(0,9);
                _dummyrate = Random.Range(0,4);


                
                    if (_dummyrate % 5 == 0)
                    {
                        dummy[_apperPos].SetActive(true);

                    }
                    else
                    {
                        moles[_apperPos].SetActive(true);
                    }

                    StartCoroutine(Disapp(_apperPos));
                    
                    _timer = 0;
                
            }
            
        }
        
        private IEnumerator Disapp(int disPos) {
            yield return new WaitForSeconds(3f);
            moles[disPos].SetActive(false);
            dummy[disPos].SetActive(false);
            
        }
    }

}