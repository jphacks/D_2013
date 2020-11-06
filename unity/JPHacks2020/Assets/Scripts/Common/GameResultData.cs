using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Common
{
    public class GameResultData
    {
        public bool isClear { get; private set; }
        public DefineData.SCENE_NAME sceneName;

        public GameResultData(bool _isClear, DefineData.SCENE_NAME _sceneName)
        {
            isClear = _isClear;
            sceneName = _sceneName;
        }
    }

}