#pragma strict

private var gameMaster : GameMaster;

private var MAX_HEALTH : int = 200;
private var damageTaken : int = 0;
private var healthStolen : int = 0;

function Start () {

}

function Awake () {
	//TODO add the gamemaster.
}

function Update () {
	
}

function TakeDamage (damageToBeDone : int) {
	damageTaken += damageToBeDone;
	CheckDeath();
}

function RecoverDamage (damageRecovered : int) {
	damageTaken -= damageRecovered;
	
	//Check to make sure damageTaken is always > 0.
	if (damageTaken < 0)
		damageTaken = 0;
}

function CheckDeath() {
	if (damageTaken >= MAX_HEALTH) {
		Die();
	}
}

function Die() {
	//TODO tell the gamemaster.
	
	//Should be changed to animation.Play("Death");
	Destroy(this.gameObject);
}