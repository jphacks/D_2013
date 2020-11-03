using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Maze
{
    public class CollisionChecker : MonoBehaviour
    {
        [SerializeField] private int PlayerId;
        [SerializeField] private int _collisionNum;
        [SerializeField] private MazePlayer mazePlayer;

   
        private void OnCollisionEnter(Collision collision)
        {
            if(collision.gameObject.tag == "Wall")
            {
                switch (_collisionNum)
                {
                    case 1:
                        mazePlayer.collisionFront[PlayerId - 1] = true;
                        break;
                    case 2:
                        mazePlayer.collisionBack[PlayerId - 1] = true;
                        break;
                    case 3:
                        mazePlayer.collisionRight[PlayerId - 1] = true;
                        break;
                    case 4:
                        mazePlayer.collisionLeft[PlayerId - 1] = true;
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
                    mazePlayer.collisionFront[PlayerId - 1] = false;
                    break;
                case 2:
                    mazePlayer.collisionBack[PlayerId - 1] = false;
                    break;
                case 3:
                    mazePlayer.collisionRight[PlayerId - 1] = false;
                    break;
                case 4:
                    mazePlayer.collisionLeft[PlayerId - 1] = false;
                    break;
                default:
                    break;
            }
        }
    }
}

