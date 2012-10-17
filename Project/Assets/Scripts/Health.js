#pragma strict

//var gameMaster : GameMaster;
//gameMaster should probably handle the Die function because it differs for every instance.
//Check instance with "typeof" function OR "gameObject.name" variable.

var MAX_HEALTH : int = 200;
private var damageTaken : int = 0;

function takeDamage(damage : int) {
	damageTaken += damage;
}

function heal(recovery : int) {
	damageTaken -= recovery;
	
	//check for negative health
	if (damageTaken < 0)
		damageTaken = 0;
}

function checkDeath() {
	if (damageTaken >= MAX_HEALTH)
		//alert the gameMaster
		Debug.Log(""+this.gameObject.name+" has died.");
}