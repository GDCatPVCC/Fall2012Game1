var newSkin : GUISkin;
var HC : HideCursor;
var player:GameObject;
var mainCamera:GameObject;
var weapon : missileLauncher;


private var y : int = 50;

HC = GetComponent("HideCursor");

function Start() {
	enabled = false;
}

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
    this.enabled = false;
    //enable cursor hiding script
    HC.enabled = true; 
    //unlock the view
    player.GetComponent("MouseLook").enabled = true;      
    mainCamera.GetComponent("MouseLook").enabled = true;   
    //don't fire when unpausing
    weapon.canFire = true;
    }
    
    //main menu return button (level 0)
    /*if(GUI.Button(Rect(55, 150, 180, 40), "Main Menu")) {
    ////this stuff makes it so the game is not paused when you go from the game to the main menu and back.
    //resume the game
    Time.timeScale = 1.0;
    //disable pause menu
    this.enabled = false;
    //enable cursor hiding script
    HC.enabled = true; 
    //unlock the view
    //GameObject.Find("First Person Controller").GetComponent("MouseLook").enabled = true; 
    //GameObject.Find("Main Camera").GetComponent("MouseLook").enabled = true;     
    player.GetComponent("MouseLook").enabled = true;   
    mainCamera.GetComponent("MouseLook").enabled = true;      
    Application.LoadLevel(0);
    }*/
    
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