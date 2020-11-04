using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameListManager : MonoBehaviour
{
    [SerializeField] private Button[] _toGhostButton;
    [SerializeField] private Button[] _toMazeButton;
    [SerializeField] private Button[] _toAnnoyedButton;
    [SerializeField] private Button[] _toClickButton;
    [SerializeField] private Button[] _toMainButton;
    [SerializeField] private Button _toSettingsButton;

    [SerializeField] private Button[] _subGame;

    [SerializeField] private GameObject _GhostView;
    [SerializeField] private GameObject _MazeView;
    [SerializeField] private GameObject _AnnoyedView;
    [SerializeField] private GameObject _ClickView;
    [SerializeField] private GameObject _MainView;


    // Start is called before the first frame update
    void Start()
    {
        for (int i = 0; i < _toGhostButton.Length; i++)
        {
            _toGhostButton[i].onClick.AddListener(() => ChangeView(0));
        }
        for (int i = 0; i < _toMazeButton.Length; i++)
        {
            _toMazeButton[i].onClick.AddListener(() => ChangeView(1));
        }
        for (int i = 0; i < _toAnnoyedButton.Length; i++)
        {
            _toAnnoyedButton[i].onClick.AddListener(() => ChangeView(2));
        }
        for (int i = 0; i < _toClickButton.Length; i++)
        {
            _toClickButton[i].onClick.AddListener(() => ChangeView(3));
        }
        for (int i = 0; i < _toMainButton.Length; i++)
        {
            _toMainButton[i].onClick.AddListener(() => ChangeView(4));
        }

        //Element3はじろけんゲームマージ後アタッチを必ず変更！！忘れないように！！
        for (int i = 0; i < _subGame.Length; i++)
        {
            int count = i;
            _subGame[i].onClick.AddListener(() => OnClickLoadScene(count));
        }


        _toSettingsButton.onClick.AddListener(SettingView);
    }

    // Update is called once per frame
    void Update()
    {

    }

    void SettingView()
    {
        Debug.Log("HOGEHOGE");
    }

    void ChangeView(int id)
    {
        ViewFalse();
        switch (id)
        {
            case 0:
                _GhostView.SetActive(true);
                break;
            case 1:
                _MazeView.SetActive(true);
                break;
            case 2:
                _AnnoyedView.SetActive(true);
                break;
            case 3:
                _ClickView.SetActive(true);
                break;
            case 4:
                _MainView.SetActive(true);
                break;
        }
    }

    void ViewFalse()
    {
        _GhostView.SetActive(false);
        _MazeView.SetActive(false);
        _AnnoyedView.SetActive(false);
        _ClickView.SetActive(false);
        _MainView.SetActive(false);
    }

    void OnClickLoadScene(int id)
    {
        switch (id)
        {
            case 0:
                Common.DefineData.LoadScene(Common.DefineData.SCENE_NAME.GAME_A);
                break;
            case 1:
                Common.DefineData.LoadScene(Common.DefineData.SCENE_NAME.GAME_B);
                break;
            case 2:
                Common.DefineData.LoadScene(Common.DefineData.SCENE_NAME.GAME_C);
                break;
            case 3:
                Common.DefineData.LoadScene(Common.DefineData.SCENE_NAME.GAME_D);
                break;
            case 4:
                Common.DefineData.LoadScene(Common.DefineData.SCENE_NAME.GAME_E);
                break;
            case 5:
                Common.DefineData.LoadScene(Common.DefineData.SCENE_NAME.GAME_F);
                break;
        }

    }
}
