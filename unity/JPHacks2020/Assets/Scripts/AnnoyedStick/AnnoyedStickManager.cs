using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AnnoyedStickManager : MonoBehaviour
{
    private float _speed = 0.05f;
    [SerializeField] private FixedJoystick _joystick;


    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        this.transform.position += new Vector3(_speed * _joystick.Direction.x, _speed * _joystick.Direction.y,0);

    }
    private void OnCollisionEnter(Collision collision)
    {
        if(collision.gameObject.tag == "Goal")
        {
            Debug.Log("CLEAR");
        }
        else
        {
            Debug.Log("FAIL");
        }
    }
}
