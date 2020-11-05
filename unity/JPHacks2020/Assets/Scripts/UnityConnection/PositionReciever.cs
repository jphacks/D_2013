using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace UnityConnection
{
    public class PositionReciever : MonoBehaviour
    {
        [SerializeField] private PositionSync _positionSync;

        private void Update()
        {
            if (_positionSync.PosQueue.Count > 0)
            {
                gameObject.transform.position = SyncPos();
            }
        }

        private Vector3 SyncPos()
        {
            return _positionSync.PosQueue.Dequeue();
        }
    }

}