using UnityEngine;

namespace Maze
{
    public class OwnMazePlayer : MazePlayer
    {
        [SerializeField] private FixedJoystick _joystick;
        private float _speed = 0.05f;
        private float _directionX;
        private float _directionY;

        protected override void PlayerMove()
        {
            _directionX = _joystick.Direction.x;
            _directionY = _joystick.Direction.y;

            if (_isPlay)
            {
                if (collisionFront[PlayerId - 1] && _directionY > 0)
                {
                    _directionY = 0;
                }
                if (collisionBack[PlayerId - 1] && _directionY < 0)
                {
                    _directionY = 0;
                }
                if (collisionRight[PlayerId - 1] && _directionX > 0)
                {
                    _directionX = 0;
                }
                if (collisionLeft[PlayerId - 1] && _directionX < 0)
                {
                    _directionX = 0;
                }
                this.transform.position += new Vector3(_adjustX * _speed * _directionX, 0, _adjustY * _speed * _directionY);
            }
            _isPlay = mazeManager.isPlay;
        }
    }

}