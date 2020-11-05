using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;

namespace Common
{
    public static class JsonMaker
    {
        public static void OverWriteJson(string userName, bool isClear, DefineData.SCENE_NAME sceneName)
        {
            UserData userData = new UserData();
            userData.userName = userName;
            userData.isClear = isClear;
            string jsonString = JsonUtility.ToJson(userData);

            StreamWriter streamWriter = new StreamWriter(Application.streamingAssetsPath + "/ResultData.json", true);
            streamWriter.Write(jsonString);
            streamWriter.Flush();
            streamWriter.Close();
        }
    }
}
