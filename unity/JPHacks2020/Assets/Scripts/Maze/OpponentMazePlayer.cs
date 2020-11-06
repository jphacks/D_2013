using UnityEngine;
using UnityConnection;

namespace Maze
{
    public class OpponentMazePlayer : MazePlayer
    {
        protected override void PlayerMove()
        {
            if (PositionSync.Instance.PosQueue.Count > 0 && _isPlay)
            {
                gameObject.transform.position = SyncPos();
            }
            _isPlay = mazeManager.isPlay;
        }

        private Vector3 SyncPos()
        {
            return PositionSync.Instance.PosQueue.Dequeue();
        }
    }

}