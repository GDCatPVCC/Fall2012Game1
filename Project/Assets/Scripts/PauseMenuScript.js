var newSkin : GUISkin;

function thePauseMenu() {
    //layout start
    GUI.BeginGroup(Rect(Screen.width / 2 - 150, 50, 300, 250));
    
    //the menu background box
    GUI.Box(Rect(0, 0, 300, 250), "");
    
    //logo picture
    GUI.Label(Rect(75, 50, 300, 68), "Paused");
    
    ///////pause menu buttons
    //game resume button
    if(GUI.Button(Rect(55, 100, 180, 40), "Resume")) {
    //resume the game
    Time.timeScale = 1.0;
    //disable pause menu
    var script3 = GetComponent("PauseMenuScript"); 
    script3.enabled = false;
    //enable cursor hiding script
    var script4 = GetComponent("HideCursor"); 
    script4.enabled = true; 
    }
    
    //main menu return button (level 0)
    if(GUI.Button(Rect(55, 150, 180, 40), "Main Menu")) {
    Application.LoadLevel(0);
    }
    
    //quit button
    if(GUI.Button(Rect(55, 200, 180, 40), "Quit")) {
    Application.Quit();
    }
    
    //layout end
    GUI.EndGroup(); 
}

function OnGUI () {
    //load GUI skin
    GUI.skin = newSkin;
    
    //show the mouse cursor
    Screen.showCursor = true;
    
    //run the pause menu script
    thePauseMenu();
}