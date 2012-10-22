#pragma strict

private var player : Transform;
var speed : int = 3;

private var distance : float;
private var state : int;
private var IGNORANT : int = 0;
private var WATCHING : int = 1;
private var CHASING : int = 2;
private var pissed : boolean = false;

function Start () {
	player = GameObject.FindWithTag("Player").transform;
}

function Update () {
	distance = Vector3.Distance(player.position, this.transform.position);

	if (distance > 15)
		state = IGNORANT;
	else if (distance > 10)
		state = WATCHING;
	else {
		state = CHASING;
		pissed = true;
	}
	
	//Debug.Log(state);
	
	if (state == WATCHING || state == CHASING || pissed) {
	
		//Debug.DrawLine(player.transform.position, this.transform.position);
	
		//This will rotate the object to always face the player.
		transform.LookAt(player);
		transform.rotation.x = 0;
		transform.rotation.z = 0;
	} 
	//The else was removed because if the zombie is chasing, he should also be looking where he's going.
	if (state == CHASING || pissed) {
		//The direction is found by the opposite of the zombie to the player
		//You could also switch this to this - player's position
		//THIS IS NOW UNIMPORTANT.  It might become handy later, but we need to add global references NOT LOCAL.
		//USe Vector3.direction function
		//var directionVector : Vector3 = -(player.transform.position - this.transform.position);
		//directionVector = directionVector / directionVector.magnitude;
		
		transform.Translate(new Vector3(0, 0, speed * Time.deltaTime));
	}
}

function getMad() {
	pissed = true;
}