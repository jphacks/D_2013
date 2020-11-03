using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Maze
{
    public class MazeManager : MonoBehaviour
    {
        //trueならP1が操作
        [SerializeField] private int _playerId;
        [SerializeField] private GameObject[] _Camera;

        void OnEnable()
        {
            
        }

        // Start is called before the first frame update
        void Start()
        {
            for(int i = 0;i < _Camera.Length; i++)
            {
                _Camera[i].SetActive(false);
            }
            _Camera[_playerId - 1].SetActive(true);
        }

        // Update is called once per frame
        void Update()
        {

        }
    }
}

