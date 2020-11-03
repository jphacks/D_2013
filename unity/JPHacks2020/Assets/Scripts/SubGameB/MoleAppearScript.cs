using System.Collections;
using System.Collections.Generic;
using UnityEngine;


namespace Mole
{
    public class MoleAppearScript : MonoBehaviour
    {
        [SerializeField] GameObject[] moles;
        

        private int _apperPos;
        private float _interval;

        private float _timer = 0;
        
        
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
                moles[_apperPos].SetActive(true);
                StartCoroutine("disapp", _apperPos);

                _timer = 0;
            }
            
        }
        
        private IEnumerator disapp(int disPos) {
            yield return new WaitForSeconds(5f);
            moles[disPos].SetActive(false);
        }
    }

}