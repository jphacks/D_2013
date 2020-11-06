using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace Mole
{
    public class UIManagerScript : MonoBehaviour
    {
        [SerializeField] Button okbutton;
        [SerializeField] GameObject how2Image;
        [SerializeField] MoleAppearScript moleappscript;
        [SerializeField] Button finalOkButton;
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

        }

        private void Closehow2() {

            how2Image.SetActive(false);
            moleappscript.enabled = true;

        }

        private void FinalOk() {
        }
    }
}
