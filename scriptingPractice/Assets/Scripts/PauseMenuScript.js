var newSkin : GUISkin;

function thePauseMenu()
{
	////pause menu box
	GUI.BeginGroup(Rect(Screen.width/2 - 150,50,300,250));
	GUI.Box(Rect(0,0,300,250), "");
	GUI.Label(Rect(75,50,180,40),"Paused");
	////pause menu buttons
	//game resume button
	if(GUI.Button(Rect(55,100,180,40),"Resume"))
	{
		Time.timeScale = 1.0;
		var script3 = GetComponent("PauseMenuScript");
		script3.enabled = false;
		var script4 = GetComponent("HideCursorScript");
		script4.enabled = true;
	}
	//main menu button
	if(GUI.Button(Rect(55,150,180,40), "Main Menu"))
	{
		Application.LoadLevel(0);
	}
	//quit game button
	if(GUI.Button(Rect(55,200,180,40), "Quit"))
	{
		Application.Quit();
	}
	////pause menu box end
	GUI.EndGroup();
}

function OnGUI()
{
	GUI.skin = newSkin;
	Screen.showCursor = true;
	thePauseMenu();
}
