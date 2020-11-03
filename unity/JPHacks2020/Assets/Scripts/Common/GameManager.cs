using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;

namespace Common
{
    public class GameManager : SingletonMonoBehaviour<GameManager>
    {
        private string _userName;
        private DateTime _sleepTime;
        private DateTime _awakeTime;
    }
}

