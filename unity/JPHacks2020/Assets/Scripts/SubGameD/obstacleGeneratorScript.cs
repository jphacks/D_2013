using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Run
{
    public class obstacleGeneratorScript : MonoBehaviour
    {
        [SerializeField] GameObject[] obstacle;
        [SerializeField] GameObject[] stages;

        private int _generatePos;
        private int  _double;

        // Start is called before the first frame update
        void Start()
        {
            for (int i = 1;i<=7;i++) {
                _generatePos = Random.Range(0,3);
                _double = Random.Range(0,3);
                int par = Random.RandomRange(0, obstacle.Length);
                Instantiate(obstacle[par], new Vector3(stages[_generatePos].transform.position.x, 2f, i*10 ),Quaternion.identity);
                if (_double%3==0) {
                    _generatePos = Random.Range(0,3);
                    Instantiate(obstacle[par], new Vector3(stages[_generatePos].transform.position.x, 2f, i * 10), Quaternion.identity);
                }

            }
        }

        // Update is called once per frame
        void Update()
        {
      
        }


       
    }
}
