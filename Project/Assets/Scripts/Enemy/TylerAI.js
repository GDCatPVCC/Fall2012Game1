#pragma strict

var player:Transform;
var waypoints:Transform[];

//speed declarations
private var walkSpeed:int = 3;
private var runSpeed:int = 5;
private var rotateSpeed:int = 2;

//threshholds
private var chaseThreshhold:int = 10;
private var lookThreshhold:int = 15;
private var giveUpThreshhold:int = 20;

private var currentWaypoint:int = 0;
private var nextWaypoint:int = 1;
private var currentTarget:Transform;

private var status:int;
//status constants USE THESE
private var STANDING:int = 0;
private var PATROLLING:int = 1;
private var CHASING:int = 2;
private var LOOKING:int = 3;

function Start() {
	currentTarget = waypoints[0];
	status = PATROLLING;
}

function Update () {

	var thisPos:Vector2 = new Vector2(transform.position.x, transform.position.z);
	var targPos:Vector2 = new Vector2(currentTarget.position.x, currentTarget.position.z);
	var distToTarget:float = Vector2.Distance(thisPos, targPos);
	
	if (status == PATROLLING) {
		var playerPos:Vector2 = new Vector2(player.position.x, player.position.z);
		var distToPlayer:float = Vector2.Distance(thisPos, playerPos);
		
		if (distToTarget < 1) {
			if (currentWaypoint == waypoints.Length-1)
				nextWaypoint = -1;
			else if (currentWaypoint == 0)
				nextWaypoint = 1;
			currentWaypoint += nextWaypoint;
		}
	}

	//MOVEMENT
	if (status == PATROLLING) {
		currentTarget = waypoints[currentWaypoint];
		Look();
		Walk();
	} else if (status == CHASING) {
		currentTarget = player;
		Look();
		Run();
	} else if (status == LOOKING) {
		currentTarget = player;
		Look();
	}
}

function Look() {
	var tempQ : Quaternion = Quaternion.Slerp(transform.rotation, Quaternion.LookRotation(currentTarget.position - transform.position), rotateSpeed*Time.deltaTime);
	tempQ.x = 0;
	tempQ.z = 0;
	
	transform.rotation = tempQ;
}

function Walk() {
	transform.position += transform.forward * walkSpeed * Time.deltaTime;
}

function Run() {
	transform.position += transform.forward * runSpeed * Time.deltaTime;
}