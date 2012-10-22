#pragma strict

//to detect this I guess we'll have to call getComponent from the object?
//WILD!  Unity detects the presence of GameMaster on the gameObject that we plug in via the GUI.
//That makes everything way simpler :D
var gameMaster : GameMaster;

private var MAX_POWER : int = 1000; //Player Max Brainpower
private var usedPower : int = 0;


function Awake() {
	//TODO add code to detect gamemaster
	//this is actually handled in the GUI because there is only one Player in the scene
}

function Start () {

}

function Update () {
	//gameMaster.checkRun(); //Used for testing purposes
}

function UsePower(power : int) {
	usedPower += power;
	CheckDeath();
}

function RecoverPower(power : int) {
	usedPower -= power;
	
	//Make Power > 0
	if (usedPower <= 0) {
		usedPower = 0;
	}
}

function CheckDeath() {
	if (usedPower > MAX_POWER) {
		Die();
	}
}
function Die() {
	//TODO Write Die Function
	Debug.Log("You are already dead");
}