var isQuitButton = false;

function OnMouseEnter()
{
	//change the color of the text
	renderer.material.color = Color.red;
}

function OnMouseExit()
{
	//change the color of the text
	renderer.material.color = Color.white;
}
function OnMouseUp()
{
	//are we dealing with a Quit button?
	if( isQuitButton )
	{
		//Quit the game
		Application.Quit();
	}
	else
	{
		//load level
		Application.LoadLevel(1);
	}
}