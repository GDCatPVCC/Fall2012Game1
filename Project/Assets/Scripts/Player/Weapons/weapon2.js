#pragma strict
// part of my current attempt to switch weapons in the HUD script
private var wepbox : Rect = new Rect(0,Screen.height-175,150,150);
private var clipbox : Rect = new Rect(0,Screen.height-25,75,25);
private var ammobox : Rect = new Rect(75,Screen.height-25,75,25);

var crossmex : Texture2D;
var dagtex : Texture2D;
var size : float = 32;
var skin : GUISkin;

function start()
{
	enabled = false;
}

function OnGUI()
{
	GUI.skin = skin;
	GUI.DrawTexture(wepbox,dagtex);
	GUI.DrawTexture(Rect(Screen.width/2-size/2,Screen.height/2-size/2,size,size), crossmex);
	GUI.skin = null;
	GUI.Box(clipbox,"");
	GUI.Box(ammobox,"");
}