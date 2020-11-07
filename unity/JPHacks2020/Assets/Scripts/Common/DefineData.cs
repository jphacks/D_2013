using System.Collections.Generic;
using UnityEngine.SceneManagement;

namespace Common
{
    public static class DefineData
    {
        public static List<GameResultData> resultData = new List<GameResultData>();
        public static string userName = "watayo";

        public enum SCENE_NAME {
            TITLE,
            REGISTRATION,
            SERVICE_SETTING,
            GAMELIST,
            RESULT,
            GAME_A,
            GAME_B,
            GAME_C,
            GAME_D,
            GAME_E,
            GAME_F
        };

        /// <summary>
        /// シーンの遷移を統一とバグの温床を極限まで減らすため
        /// </summary>
        /// <param name="scene">enumのシーン</param>
        public static void LoadScene(SCENE_NAME scene)
        {
            SceneManager.LoadScene(_transSceneName[scene]);
        }

        // enumをScene名に変換
        private static Dictionary<SCENE_NAME, string> _transSceneName = new Dictionary<SCENE_NAME, string>() {
            { SCENE_NAME.TITLE, "Title"},
            { SCENE_NAME.REGISTRATION, "Registration"},
            { SCENE_NAME.SERVICE_SETTING, "ServiceSetting"},
            { SCENE_NAME.GAMELIST, "GameList"},
            { SCENE_NAME.RESULT, "Result"},
            { SCENE_NAME.GAME_A, "SubGameA"},
            { SCENE_NAME.GAME_B, "SubGameB"},
            { SCENE_NAME.GAME_C, "SubGameC"},
            { SCENE_NAME.GAME_D, "SubGameD"},
            { SCENE_NAME.GAME_E, "SubGameE"},
            { SCENE_NAME.GAME_F, "SubGameF"},
        };

        public static void SetData(bool isCler, SCENE_NAME sceneName)
        {
            GameResultData gameResultData = new GameResultData(isCler, sceneName);
            resultData.Add(gameResultData);
            LoadScene(SCENE_NAME.RESULT);
        }

        public static void Reset()
        {
            resultData.Clear();
        }

        public static void SetUserName(string name)
        {
            userName = name;
        }
    }

}
