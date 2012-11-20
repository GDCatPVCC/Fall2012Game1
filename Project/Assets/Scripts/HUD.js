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
var xbowtex : Texture2D;
var dagtex : Texture2D;
var damtex : Texture2D;
var healthtex: Texture2D;
var key1 : Texture2D;
var key2 : Texture2D;
var key3 : Texture2D;
var size : float = 32;
var healthammount : String = "50/100";
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
	healthammount = GUI.TextArea(Rect(Screen.width/2-25,0,50,25),healthammount);
	GUI.DrawTexture(damagebox,damtex);
	GUI.DrawTexture(healthbox,healthtex);
	if(Input.GetKey("r"))
	{
		GUI.DrawTexture(wepbox,xbowtex);
		GUI.Box(clipbox,"clip");
		GUI.Box(ammobox,"ammo");
		GUI.DrawTexture(Rect(Screen.width/2-size/2,Screen.height/2-size/2,size,size), crosstex);
	}
	else
	{
		GUI.DrawTexture(wepbox,dagtex);
		GUI.Box(clipbox,"");
		GUI.Box(ammobox,"");
		GUI.DrawTexture(Rect(Screen.width/2-size/2,Screen.height/2-size/2,size,size), crossmex);
	}
	if(Input.GetKey("b"))
	{
		GUI.DrawTexture(keybox1,key1);
	}
	else
	{
		GUI.Box(keybox1,"");
	}
	if(Input.GetKey("v"))
	{
		GUI.DrawTexture(keybox2,key2);
	}
	else
	{
		GUI.Box(keybox2,"");
	}
	if(Input.GetKey("n"))
	{
		GUI.DrawTexture(keybox3,key3);
	}
	else
	{
		GUI.Box(keybox3,"");
	}
}