using UnityEngine;

namespace Common
{
    public static class JsonMaker
    {
        public static string SendJsonData(string id, Vector3 pos)
        {
            UserData userData = new UserData();
            userData.x = pos.x.ToString("f2");
            userData.y = pos.y.ToString("f2");
            userData.z = pos.z.ToString("f2");

            string jsonString = JsonUtility.ToJson(userData);
            return jsonString;
        }
    }

    public static class JsonParser
    {
        public static UserData ParseJson(string jsonString)
        {
            UserData userData = JsonUtility.FromJson<UserData>(jsonString);
            return userData;
        }
    }

}
