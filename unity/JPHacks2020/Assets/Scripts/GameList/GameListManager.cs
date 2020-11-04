using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameListManager : MonoBehaviour
{
    [SerializeField] private Button[] subGame;

    // Start is called before the first frame update
    void Start()
    {
        for(int i = 0; i < subGame.Length; i++)
        {
            int count = i;
            subGame[i].onClick.AddListener(() => OnClick(count));
            
        }
        
    }

    // Update is called once per frame
    void Update()
    {
    }

    void OnClick(int id)
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
