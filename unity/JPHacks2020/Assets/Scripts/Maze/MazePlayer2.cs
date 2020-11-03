using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Maze
{
    public class MazePlayer2 : MonoBehaviour
    {
        [SerializeField] bool _isPlayer;
        [SerializeField] FixedJoystick _joystick;
        float _speed = 0.05f;
        float _directionX;
        float _directionY;
        public bool collisionFront = false;
        public bool collisionBack = false;
        public bool collisionRight = false;
        public bool collisionLeft = false;

        // Start is called before the first frame update
        void Start()
        {

        }

        // Update is called once per frame
        void Update()
        {
            _directionX = _joystick.Direction.x;
            _directionY = _joystick.Direction.y;

            if (collisionFront == true && _directionY > 0)
            {
                _directionY = 0;
            }
            if (collisionBack == true && _directionY < 0)
            {
                _directionY = 0;
            }
            if (collisionRight == true && _directionX > 0)
            {
                _directionX = 0;
            }
            if (collisionLeft == true && _directionX < 0)
            {
                _directionX = 0;
            }
            this.transform.position += new Vector3(1 * _speed * _directionX, 0, 1 * _speed * _directionY);
        }
    }
}
