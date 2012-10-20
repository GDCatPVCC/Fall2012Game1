#pragma strict

//set player in Unity GUI
var player : GameObject;
//var enemies : Array;

function Start () {

}

function Update () {

}

//wraiths call this function from the GM when they die
//it will restore the players health a certain portion
function killedAWraithWithHealth(health : int) {
	player.GetComponent(Health).heal(health);	
}

//Ryan said this would be handled in the manager
//I figure it's a matter of running an animation.
function openDoor(door : GameObject) {
	door.animation.Play("open");
}

function closeDoor(door : GameObject) {
	door.animation.Play("close");
}