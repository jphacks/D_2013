using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Common;

namespace Mole
{
    public class UIManagerScript : MonoBehaviour
    {
        [SerializeField] Button okbutton;
        [SerializeField] GameObject how2Image;
        [SerializeField] MoleAppearScript moleappscript;
        [SerializeField] ScoreScript scorescript;
        [SerializeField] Button finalOkButton;
        [SerializeField] Text timerText;
        [SerializeField] Text missText;
        // Start is called before the first frame update
        void Start()
        {
            okbutton.onClick.AddListener(Closehow2);
            finalOkButton.onClick.AddListener(FinalOk);
            moleappscript.enabled = false;
        }

        // Update is called once per frame
        void Update()
        {
            timerText.text = "経過時間 : " + moleappscript.spenttimer.ToString("f1") + "秒";
            missText.text = "ミス回数 : " + scorescript.missCount.ToString() + "回";
        }

        private void Closehow2() {

            how2Image.SetActive(false);
            moleappscript.enabled = true;

        }

        private void FinalOk() {
            DefineData.SetData(true, DefineData.SCENE_NAME.GAME_B);
        }
    }
}
