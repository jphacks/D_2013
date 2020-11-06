using System.Collections;
using UnityEngine;
using UnityEngine.Networking;
using Common;

public class ConnectHttp : MonoBehaviour
{
    private const string URL = "http://ea54ec449d93.ngrok.io/unity_score";

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
