using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace run
{
    public class PlayerControlScript : MonoBehaviour
    {
        private Rigidbody _rigidbody;
        [SerializeField] GameObject[] stages;
        [SerializeField] Button leftButton;
        [SerializeField] Button rightButton;
        

        //private Vector3 _pos;
        
        private bool _start;

        private int _currentPos;
        private Vector3 _initialPos;
        private float _speed = 0.2f;
        public int life = 3;
        // Start is called before the first frame update
        void Start()
        {
            _initialPos = transform.position; 
            _currentPos = 1;
            _start = true;
            
            leftButton.onClick.AddListener(ToLeft);
            rightButton.onClick.AddListener(ToRight);
        }

        // Update is called once per frame
        void Update()
        {
            if (_start)
            {
                transform.position += new Vector3(0, 0, _speed);
                transform.position = new Vector3(stages[_currentPos].transform.position.x, transform.position.y, transform.position.z);
            }
            Debug.Log(_currentPos);
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
            } 
        }
        private void OnTriggerEnter(Collider other)
        {
            if (other.gameObject.tag == "obstacle")
            {
                if (life >= 2)
                {
                    life--;
                    this.transform.position = _initialPos;
                    Debug.Log("Alert");
                }
                else {
                    Debug.Log("GameOver");
                }
            }
        }
    }
}