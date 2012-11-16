private var healthbox : Rect = new Rect(Screen.width/20,0,1000,25);
private var wepbox : Rect = new Rect(0,Screen.height-175,150,150);
private var clipbox : Rect = new Rect(0,Screen.height-25,75,25);
private var ammobox : Rect = new Rect(75,Screen.height-25,75,25);
private var keybox1 : Rect = new Rect(0,0,50,50);
private var keybox2 : Rect = new Rect(0,0,50,50);
private var keybox3 : Rect = new Rect(0,0,50,50);
var damagebox : Rect = new Rect(0,0,500,25);
/*var clip : float = 13;
var ammo : float = 80;
*/
var crosstex : Texture2D;
var crossmex : Texture2D;
var size : float = 32;
healthbox.x = Screen.width/2-healthbox.width/2;
damagebox.x = Screen.width/2-healthbox.width/2;
keybox1.x = Screen.width/2-keybox2.width/2;
keybox1.y = Screen.height-keybox2.height;
keybox2.x = Screen.width/2-keybox1.width-keybox1.width/2;
keybox2.y = Screen.height-keybox1.height;
keybox3.x = Screen.width/2+keybox3.width-keybox3.width/2;
keybox3.y = Screen.height-keybox3.height;
function Update()
{
}


function OnGUI()
{
	GUI.color = Color.green;
	GUI.Box(healthbox,"Base for healthbox");
	GUI.Box(damagebox,"Base for damagebox");
	GUI.Box(wepbox,"Weapon display box");
	GUI.Box(clipbox,"clip");
	GUI.Box(ammobox,"ammo");
	GUI.Box(keybox1,"2");
	GUI.Box(keybox2,"1");
	GUI.Box(keybox3,"3");
	if(Input.GetKey("q"))
	{
		GUI.DrawTexture(Rect(Screen.width/2-size/2,Screen.height/2-size/2,size,size), crosstex);
	}
	else
	{
		GUI.DrawTexture(Rect(Screen.width/2-size/2,Screen.height/2-size/2,size,size), crossmex);
	}
}