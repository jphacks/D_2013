using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PlayerControlScript : MonoBehaviour
{
    private Rigidbody _rigidbody;
    [SerializeField] GameObject[] stages;
    [SerializeField] Button leftButton;
    [SerializeField] Button rightButton; 
    

    //private Vector3 _force;
    private float _speed = 0.1f;
    // Start is called before the first frame update
    void Start()
    {
        //_rigidbody = GetComponent<Rigidbody>();

       // this.gameObject.transform.position.x = stages[2].gameObject.transform.position.x;

    }

    // Update is called once per frame
    void Update()
    {

        //_force = new Vector3(0,0,_speed);
        //_rigidbody.AddForce(_force);
        transform.position += new Vector3(0,0,_speed);
    }
}
