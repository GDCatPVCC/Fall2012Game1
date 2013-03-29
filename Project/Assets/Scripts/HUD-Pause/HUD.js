//getting all the textures required
var skin : GUISkin;
var healthtex : Texture2D;
var damtex : Texture2D;
var key1 : Texture2D;
var key2 : Texture2D;
var key3 : Texture2D;
var size : float = 32;
var healthamount : int = 80;
var healthamountstring : String = "80";
var GM : GameMaster;

//creating all the rects for the hud boxes
private var healthbox : Rect = new Rect(Screen.width/20,0,1000,25);
private var keybox1 : Rect = new Rect(0,0,50,50);
private var keybox2 : Rect = new Rect(0,0,50,50);
private var keybox3 : Rect = new Rect(0,0,50,50);
var damagebox : Rect = new Rect(0,0,healthamount*10,25);
/*var clip : float = 13;
var ammo : float = 80;
*/

//determining all the necesary positions for the boxes
healthbox.x = Screen.width/2-healthbox.width/2;
damagebox.x = Screen.width/2-healthbox.width/2;
keybox1.x = Screen.width/2-keybox2.width/2;
keybox1.y = Screen.height-keybox2.height;
keybox2.x = Screen.width/2-keybox1.width-keybox1.width/2;
keybox2.y = Screen.height-keybox1.height;
keybox3.x = Screen.width/2+keybox3.width-keybox3.width/2;
keybox3.y = Screen.height-keybox3.height;

////scripts start

function OnGUI()
{	
	//healthbar stuff (nonoperational)
	//GUI.skin = skin;
	//GUI.Box(healthbox,healthtex);
	//damtex.Resize(healthamount*10,25);
	//GUI.Box(damagebox,damtex);
	GUI.TextArea(Rect(Screen.width-100,Screen.height-300,50,50),"Current Health: \n" + healthamountstring + "/100");
	GUI.TextArea(Rect(Screen.width-100,Screen.height-200,50,50),"Current Score: \n" + GM.score);
	GUI.TextArea(Rect(Screen.width-100,Screen.height-100,50,50),"Current Time: \n" + GM.totalTime);
	//GUI.skin = null;
	//key items boxes
	if(Input.GetKey("b"))
	{
		GUI.Box(keybox1,"");
		GUI.DrawTexture(keybox1,key1);
	}
	else
	{
		GUI.Box(keybox1,"");
	}
	if(Input.GetKey("v"))
	{
		GUI.Box(keybox2,"");
		GUI.DrawTexture(keybox2,key2);
	}
	else
	{
		GUI.Box(keybox2,"");
	}
	if(Input.GetKey("n"))
	{
		GUI.Box(keybox3,"");
		GUI.DrawTexture(keybox3,key3);
	}
	else
	{
		GUI.Box(keybox3,"");
	}
}