#pragma strict

//set player in Unity GUI
var player : GameObject;

var score : int = 0;
var musicCount : float = 0.0f;
var totalTime : float = 0;

function Start () {
	Debug.Log("I'm alive!");
}

function Update () {
	//this checks if the GameMaster runs...
	//and it DOES
	if (musicCount + Time.deltaTime < 2)
		musicCount += Time.deltaTime;
	else
		musicCount += Time.deltaTime - 2;
	//Debug.Log(musicCount);
	
	totalTime += Time.deltaTime;
}

//wraiths call this function from the GM when they die
//it will restore the players health a certain portion
function killedAWraithWithHealth(health : int) {
	player.GetComponent(Health).heal(health);	
}

function openDoor(door : GameObject) {
	door.animation.Play("open");
}

function closeDoor(door : GameObject) {
	door.animation.Play("close");
}

function addToScore(num : int) {
	score += num;
}

function subFromScore(num : int) {
//Checks to see if score will be less than 0 then corrects for it.
//Using this if statement makes sure that score will never ever be displayed as a negative number on screen
	if (score - num <= 0)
		score = 0;
	else
		score -= num;
}

function checkRun() {
	//Debug.Log("Yup, I'm here.");
}