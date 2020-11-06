using UnityEngine;

namespace Maze
{
    public abstract class MazePlayer : MonoBehaviour
    {
        [SerializeField] protected int PlayerId;
        protected int _adjustX = 1;
        protected int _adjustY = 1;
        public bool[] collisionFront = new bool[2];
        public bool[] collisionBack = new bool[2];
        public bool[] collisionRight = new bool[2];
        public bool[] collisionLeft = new bool[2];
        protected bool _isPlay = false;
        [SerializeField] protected MazeManager mazeManager;

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

        private void Update()
        {
            PlayerMove();
        }

        private void OnCollisionEnter(Collision collision)
        {
            if(collision.gameObject.tag == "Player" && PlayerId == 1)
            {
                mazeManager.isClear = true;
            }
        }

        protected abstract void PlayerMove(); 
    }    
}

