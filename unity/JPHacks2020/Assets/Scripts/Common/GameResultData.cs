using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Common
{
    public class GameResultData : MonoBehaviour
    {
        public bool isClear { get; private set; }
        public DefineData.SCENE_NAME sceneName { get; private set; }

        public GameResultData(bool _isClear, DefineData.SCENE_NAME _name)
        {
            isClear = _isClear;
            sceneName = _name;
        }
    }

}