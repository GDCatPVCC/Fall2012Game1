#pragma strict

var player:Transform;
var waypoints:Transform[];

//speed declarations
private var walkSpeed:int = 3;
private var runSpeed:int = 4;
private var rotateSpeed:int = 5;

//threshholds
private var chaseThreshhold:int = 10;
private var lookThreshhold:int = 15;
private var giveUpThreshhold:int = 20;
private var stopSearchThreshhold:int = 1; //This number must be >= the readius of the enemy in question... in theory.
private var hit : RaycastHit;

private var currentWaypoint:int = 0;
private var nextWaypoint:int = 1;
private var currentTarget:Vector3;
private var nextDirection:Vector3;

private var status:int = 1;
//status constants; USE THESE
private var STANDING:int = 0;
private var PATROLLING:int = 1;
//The enemy MUST HAVE DIRECT LINE OF SIGHT TO THE PLAYER to start looking or chasing
private var LOOKING:int = 3;
private var CHASING:int = 2;
private var SEARCHING:int = 4;

function Start () {
	currentTarget = waypoints[currentWaypoint].position;
}

function Update () {
	Debug.Log(this.rigidbody.velocity);

	var thisPos:Vector2 = new Vector2(transform.position.x, transform.position.z);
	var targPos:Vector2 = new Vector2(currentTarget.x, currentTarget.z);
	var distToTarget:float = Vector2.Distance(thisPos, targPos);
	
	Physics.Raycast(transform.position, player.position-transform.position, hit);
	var canSeePlayer : boolean = hit.collider.GetComponent("PlayerManager") != null;
	
	//decision making
	if (status == PATROLLING) {
		var playerPos:Vector2 = new Vector2(player.position.x, player.position.z);
		var distToPlayer:float = Vector2.Distance(thisPos, playerPos);
		
		if (distToPlayer < chaseThreshhold && canSeePlayer)
			status = CHASING;
		else if (distToPlayer < lookThreshhold && canSeePlayer)
			status = LOOKING;
			
		if (distToTarget < 1) {
			if (currentWaypoint == waypoints.Length-1)
				nextWaypoint = -1;
			else if (currentWaypoint == 0)
				nextWaypoint = 1;
			currentWaypoint += nextWaypoint;
		}
	} else if (status == LOOKING) {
		if (!canSeePlayer)
			status = PATROLLING;
		else if (distToTarget < chaseThreshhold)
			status = CHASING;
		else if (distToTarget > giveUpThreshhold)
			status = PATROLLING;
	} else if (status == CHASING) {
		if (!canSeePlayer) {
			currentTarget = hit.point;
			var search1:Vector2 = new Vector2(-hit.normal.z, hit.normal.x);
			var search2:Vector2 = -search1;
			var playerPath:Vector2 = new Vector2(currentTarget.x - player.transform.position.x, currentTarget.z - player.transform.position.z);
			//Mathf.Acos();
			status = SEARCHING;
		}if (distToTarget > giveUpThreshhold)
			status = PATROLLING;
		//TODO: Set death timer for explosion
	} else if (status == SEARCHING) {
		if (distToTarget < 1)
			status = PATROLLING;
	}

	//MOVEMENT
	if (status == PATROLLING) {
		currentTarget = waypoints[currentWaypoint].position;
		Look();
		Walk();
	} else if (status == CHASING) {
		currentTarget = player.position;
		Look();
		Run();
	} else if (status == LOOKING) {
		currentTarget = player.position;
		Look();
	} else if (status == SEARCHING) {
		//current Target should already be set, so it should just walk/run towards the target
		Look();
		Run();
	}
}

function Look() {
	var tempQ : Quaternion = Quaternion.Slerp(transform.rotation, Quaternion.LookRotation(currentTarget - transform.position), rotateSpeed*Time.deltaTime);
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