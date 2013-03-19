#pragma strict

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
		Destroy(this.gameObject);
}