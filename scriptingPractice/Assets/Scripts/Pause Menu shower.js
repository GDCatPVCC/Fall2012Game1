function Update ()
{
	if(Input.GetKeyUp('p'))
	{
		Time.timeScale = 0;
		var script3 = GetComponent("PauseMenuScript");
		script3.enabled = true;
		var script4 = GetComponent("HideCursorScript");
		script4.enabled = false;
	}
}