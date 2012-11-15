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

private var currentWaypoint:Transform;
private var currentTarget:Transform;

private var status:int;
//status constants USE THESE
private var PATROLLING:int = 0;
private var CHASING:int = 1;
private var RETURNING:int = 2;
private var STANDING:int = 3;
private var LOOKING:int = 4;

function Start() {
	currentWaypoint = waypoints[0];
	currentTarget = currentWaypoint;
}

function Update () {
	if (status == PATROLLING) {
		currentTarget = currentWaypoint;
		
	}
}

function Look {
	var tempQ : Quaternion = Quaternion.Slerp(transform.rotation, Quaternion.LookRotation(currentTarget.position - transform.position), rotateSpeed*Time.deltaTime);
	tempQ.x = 0;
	tempQ.z = 0;
	
	transform.rotation = tempQ;
}

function Walk {
	transform.postion += transform.forward * walkSpeed * Time.deltaTime;
}

function Run {
	transform.position += transform.forward * runSpeed * Time.deltaTime;
}