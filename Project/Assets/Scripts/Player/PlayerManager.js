#pragma strict

private var MAX_POWER : int = 1000; //Player Max Brainpower
private var usedPower : int = 0;

function Awake() {
	//TODO add code to detect gamemaster
}

function Start () {

}

function Update () {

}

function UsePower(power : int) {
	usedPower += power;
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
}