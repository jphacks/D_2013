using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace Run
{
    public class UImanagerscript : MonoBehaviour
{
   
    [SerializeField] PlayerControlScript playerscript;
    [SerializeField] Text lifeText;
     
    // Start is called before the first frame update
    void Start()
    {
     //       lifeText.text = "ライフ : " + playerscript.life.ToString();
    }

    // Update is called once per frame
    void Update()
    {
            //lifeText.text = "ライフ : " + playerscript.life.ToString();
        }
}
}
