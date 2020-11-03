using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Maze
{
    public class CollisionChecker : MonoBehaviour
    {
        [SerializeField] bool _isPlayer;
        [SerializeField] int _collisionNum;
        [SerializeField] MazePlayer1 mazePlayer1;
        [SerializeField] MazePlayer2 mazePlayer2;

   
        private void OnCollisionEnter(Collision collision)
        {
            if(collision.gameObject.tag == "Wall")
            {
                switch (_collisionNum)
                {
                    case 1:
                        if (_isPlayer == true)
                        {
                            mazePlayer1.collisionFront = true;
                        }
                        else
                        {
                            mazePlayer2.collisionFront = true;
                        }
                        break;
                    case 2:
                        if (_isPlayer == true)
                        {
                            mazePlayer1.collisionBack = true;
                        }
                        else
                        {
                            mazePlayer2.collisionBack = true;
                        }
                        break;
                    case 3:
                        if (_isPlayer == true)
                        {
                            mazePlayer1.collisionRight = true;
                        }
                        else
                        {
                            mazePlayer2.collisionRight = true;
                        }
                        break;
                    case 4:
                        if (_isPlayer == true)
                        {
                            mazePlayer1.collisionLeft = true;
                        }
                        else
                        {
                            mazePlayer2.collisionLeft = true;
                        }
                        break;
                    default:
                        break;
                }
            }
            
        }

        private void OnCollisionExit(Collision collision)
        {
            switch (_collisionNum)
            {
                case 1:
                    if (_isPlayer == true)
                    {
                        mazePlayer1.collisionFront = false;
                    }
                    else
                    {
                        mazePlayer2.collisionFront = false;
                    }
                    break;
                case 2:
                    if (_isPlayer == true)
                    {
                        mazePlayer1.collisionBack = false;
                    }
                    else
                    {
                        mazePlayer2.collisionBack = false;
                    }
                    break;
                case 3:
                    if (_isPlayer == true)
                    {
                        mazePlayer1.collisionRight = false;
                    }
                    else
                    {
                        mazePlayer2.collisionRight = false;
                    }
                    break;
                case 4:
                    if (_isPlayer == true)
                    {
                        mazePlayer1.collisionLeft = false;
                    }
                    else
                    {
                        mazePlayer2.collisionLeft = false;
                    }
                    break;
                default:
                    break;
            }
        }
    }
}

