var PMS : PauseMenuScript;
var HC : HideCursor;
var player:GameObject;
var mainCamera:GameObject;
var weapon : missileLauncher;

HC = GetComponent("HideCursor");
PMS = GetComponent("PauseMenuScript");

function Update () 
{
	if(Input.GetKeyDown("p")) 
	{
	    //pause the game
	    Time.timeScale = 0;
	    //show the pause menu
	    PMS.enabled = true;
	    //disable the cursor hiding script
	    HC.enabled = false; 
	    //lock the view
	    player.GetComponent("MouseLook").enabled = false; 
      	mainCamera.GetComponent("MouseLook").enabled = false;  
      	weapon.canFire = false;
	}
}