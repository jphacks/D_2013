using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace AnnoyedStick
{
    public class AnnoyedStickPlayer : MonoBehaviour
    {
        [SerializeField]private AnnoyedStickManager annoyedStickManager;
        private float _speed = 0.05f;
        [SerializeField] private FixedJoystick _joystick;
        private Vector3 _startPos;


        // Start is called before the first frame update
        void Start()
        {
            _startPos = this.gameObject.transform.position;
        }

        // Update is called once per frame
        void Update()
        {
            if (annoyedStickManager.isPlay)
            {
                this.transform.position += new Vector3(_speed * _joystick.Direction.x, _speed * _joystick.Direction.y, 0);
            }

        }
        private void OnCollisionEnter(Collision collision)
        {
            if (collision.gameObject.tag == "Goal")
            {
                Debug.Log("CLEAR");
                annoyedStickManager.isClear = true;
            }
            else
            {
                Debug.Log("FAIL");
                annoyedStickManager.isRestart = true;
                this.gameObject.transform.position = _startPos;
                annoyedStickManager.isPlay = false;
            }
        }
    }
}

