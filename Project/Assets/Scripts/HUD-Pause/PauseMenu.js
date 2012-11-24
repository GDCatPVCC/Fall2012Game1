var PMS : PauseMenuScript;
var HC : HideCursor;

HC = GetComponent("HideCursor");
PMS = GetComponent("PauseMenuScript");

function Update () 
{
	if(Input.GetKey("p")) 
	{
	    //pause the game
	    Time.timeScale = 0;
	    //show the pause menu
	    PMS.enabled = true;
	    //disable the cursor hiding script
	    HC.enabled = false; 
	}
}