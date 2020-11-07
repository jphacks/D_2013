using System.Collections;
using UnityEngine;
using UnityEngine.Networking;
using Common;

public class ConnectHttp : MonoBehaviour
{
    private const string URL = "https://desolate-ocean-79020.herokuapp.com/unity_score";

    void Start()
    {
        StartCoroutine("OnSend", URL);
    }

    IEnumerator OnSend(string url)
    {
        WWWForm form = new WWWForm();
        var sendNum = DefineData.resultData[0].isClear ? 1 : 0;
        DefineData.resultData.RemoveAt(0);
        form.AddField("user_score", sendNum);
        var uName = DefineData.userName;
        Debug.Log(uName);
        form.AddField("user_id", uName);

        UnityWebRequest webRequest = UnityWebRequest.Post(url, form);
        webRequest.downloadHandler = new DownloadHandlerBuffer();

        yield return webRequest.SendWebRequest();

        if (webRequest.isNetworkError)
        {
            Debug.Log(webRequest.error);
        }
        else
        {
            Debug.Log(webRequest.downloadHandler.text);
        }
    }
}
