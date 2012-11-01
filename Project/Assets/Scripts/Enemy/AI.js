#pragma strict

//attack target
var target : Transform; 
//move speed
var moveSpeed = 3; 
//speed of turning
var rotationSpeed = 3; 
// distance to attack
var attackThreshold = 3; 
// distance to start chasing
var chaseThreshold = 10;
// distance when gives up 
var giveUpThreshold = 20; 
// delay attacks
var attackRepeatTime = 1; 
// Whether Enemy is chasing or not
var chasing = false;
// Whether Enemy is patrolling around waypoints or not
var patrolling = true;
// Attack Time
//private var attackTime = Time.time;
//WayPoint
var waypoint : Transform[];
//Speed
static var speed : float = 5;
//Current Way Point
private var currentWaypoint : int; 

function Awake()
{ 
}

function Start()
{
}


function Update () { 

//Check Distance to Target

var dist = (target.position - transform.position).magnitude;

if (chasing)
{
	//Rotate Enemy to Player
	var tempQ : Quaternion = Quaternion.Slerp(transform.rotation, Quaternion.LookRotation(target.position - transform.position), rotationSpeed*Time.deltaTime);
	tempQ.x = 0;
	tempQ.z = 0;
	transform.rotation = tempQ;

	//Start Chasing Player
	transform.position += transform.forward * moveSpeed * Time.deltaTime;

//Lost Player
if (dist > giveUpThreshold)
{ 
chasing = false;
patrolling = true; 
}

// attack if close enough and within time
/*if (dist < attackThreshold && Time.time > attackTime) { 
// Attack
attackTime = Time.time + attackRepeatTime; 
	} */
} 

else {
 // start chasing if target comes close
 if (dist < chaseThreshold) { 
 chasing = true; 
 patrolling = false;
	 }
   }
   
   
if (patrolling)  
{
    if(currentWaypoint < waypoint.length)
    {
        var target : Vector3 = waypoint[currentWaypoint].position;
        var moveDirection : Vector3 = target - transform.position;
        var velocity = rigidbody.velocity;
		transform.LookAt(target);
		transform.rotation.x = 0;
		transform.rotation.z = 0;
        if(moveDirection.magnitude < 1)
        {
            currentWaypoint++;
            if (currentWaypoint >= waypoint.Length)
            	currentWaypoint = 0;
        }
        else
        {
            velocity = moveDirection.normalized*speed;
        }
    }

    rigidbody.velocity = velocity;   
}   
   
   
}