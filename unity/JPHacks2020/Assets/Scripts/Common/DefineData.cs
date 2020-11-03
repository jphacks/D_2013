using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace Common
{
    public static class DefineData
    {
        public enum SCENE_NAME {
            TITLE,
            REGISTRATION,
            SERVICE_SETTING,
            GAMELIST,
            RESULT,
            GAME_A,
            GAME_B,
            GAME_C,
            GAME_D
        };

        /// <summary>
        /// シーンの遷移を統一とバグの温床を極限まで減らすため
        /// </summary>
        /// <param name="scene">enumのシーン</param>
        public static void LoadScene(SCENE_NAME scene)
        {
            SceneManager.LoadScene(transSceneName[scene]);
        }

        // enumをScene名に変換
        private static Dictionary<SCENE_NAME, string> _transSceneName = new Dictionary<SCENE_NAME, string>() {
            { SCENE_NAME.TITLE, "Title"},
            { SCENE_NAME.REGISTRATION, "Registration"},
            { SCENE_NAME.SERVICE_SETTING, "ServiceSetting"},
            { SCENE_NAME.GAMELIST, "GameList"},
            { SCENE_NAME.RESULT, "Result"},
            { SCENE_NAME.GAME_A, "SubGameA"},
            { SCENE_NAME.GAME_B, "SubGameA"},
            { SCENE_NAME.GAME_C, "SubGameA"},
            { SCENE_NAME.GAME_D, "SubGameA"},
        };


    }

}
