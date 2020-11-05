using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Maze
{
    public class MazePlayer : MonoBehaviour
    {
        [SerializeField] private int PlayerId;
        [SerializeField] private FixedJoystick _joystick;
        private float _speed = 0.05f;
        private float _directionX;
        private float _directionY;
        private int _adjustX = 1;
        private int _adjustY = 1;
        public bool[] collisionFront = new bool[2];
        public bool[] collisionBack = new bool[2];
        public bool[] collisionRight = new bool[2];
        public bool[] collisionLeft = new bool[2];
        private bool _isPlay = false;
        [SerializeField] MazeManager mazeManager;

        // Start is called before the first frame update
        void Start()
        {
            for(int i = 0; i < collisionFront.Length; i++)
            {
                collisionFront[i] = false;
                collisionBack[i] = false;
                collisionRight[i] = false;
                collisionLeft[i] = false;
            }

            switch (PlayerId)
            {
                case 1:
                    _adjustX = -1;
                    _adjustY = -1;
                    break;
                case 2:
                    _adjustX = 1;
                    _adjustY = 1;
                    break;
            }
        }

        // Update is called once per frame
        void Update()
        {
            _directionX = _joystick.Direction.x;
            _directionY = _joystick.Direction.y;
            
            if (_isPlay)
            {
                if (collisionFront[PlayerId - 1] && _directionY > 0)
                {
                    _directionY = 0;
                    //Debug.Log("Front");
                }
                if (collisionBack[PlayerId - 1] && _directionY < 0)
                {
                    _directionY = 0;
                    //Debug.Log("Back");
                }
                if (collisionRight[PlayerId - 1] && _directionX > 0)
                {
                    _directionX = 0;
                    //Debug.Log("Right");
                }
                if (collisionLeft[PlayerId - 1] && _directionX < 0)
                {
                    _directionX = 0;
                    //Debug.Log("Left");
                }
                this.transform.position += new Vector3(_adjustX * _speed * _directionX, 0, _adjustY * _speed * _directionY);
            }
            _isPlay = mazeManager.isPlay;
        }

        private void OnCollisionEnter(Collision collision)
        {
            if(collision.gameObject.tag == "Player" && PlayerId == 1)
            {
                mazeManager.isClear = true;
            }
        }
    }    
}

