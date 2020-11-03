using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Maze
{
    public class MazeManager : MonoBehaviour
    {
        //trueならP1が操作
        [SerializeField] bool _isPlayer;
        [SerializeField] GameObject _CameraP1;
        [SerializeField] GameObject _CameraP2;
        
        

        void OnEnable()
        {
            
        }

        // Start is called before the first frame update
        void Start()
        {
            if(_isPlayer == true)
            {
                _CameraP2.SetActive(false);
            }
            else
            {
                _CameraP1.SetActive(false);
            }
        }

        // Update is called once per frame
        void Update()
        {

        }
    }
}

