using UnityEngine;

namespace AnnoyedStick
{
    public class AnnoyedStickPlayer : MonoBehaviour
    {
        [SerializeField]private AnnoyedStickManager annoyedStickManager;
        private float _speed = 0.05f;
        [SerializeField] private FixedJoystick _joystick;
        private Vector3 _startPos;

        private bool _isDead = false;
        private float _timer = 0;
        private int _count;
        [SerializeField] private AudioSource _gameOverSource;

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
            if (_isDead)
            {
                _timer += Time.deltaTime;
                if(_timer >= 0.2f)
                {
                    this.gameObject.GetComponent<MeshRenderer>().enabled = false;
                    if (_timer >= 0.4f)
                    {
                        this.gameObject.GetComponent<MeshRenderer>().enabled = true;
                        _timer = 0;
                        _count++;
                    }
                }

                if(_count >= 3)
                {
                    _count = 0;
                    annoyedStickManager.isRestart = true;
                    this.gameObject.transform.position = _startPos;
                    this.gameObject.GetComponent<MeshRenderer>().enabled = true;
                    _isDead = false;
                }
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
                _isDead = true;
                annoyedStickManager.isPlay = false;
                _gameOverSource.Play();
            }
        }
    }
}

