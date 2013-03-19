#pragma strict

var spawnRange : int = 25;
var noSpawnRange : int = 5;
var enemyPrefab : GameObject;
var disableRenderCheck : boolean = false;

var spawnCount : int = 0;

private var player : Transform;

function Start () {
	player = GameObject.FindWithTag("Player").transform;
}

function Update () {
	
	//if spawnable
	if (spawnCount > 0) {
	
		//Check if visible
		if (disableRenderCheck) {
			//Is visible
			
			//Mesure distance to player
			var distanceToPlayer = Vector3.Distance(transform.position, player.position);
			
			//If in range
			if (distanceToPlayer < spawnRange) {
				//is in range
				
				//Check if outside of noSpawnRange
				if(distanceToPlayer > noSpawnRange) {
					//outside of no spawn range
					
					//Reduce counter
					spawnCount--;
					//Spawn Enemy
					Instantiate(enemyPrefab, transform.position, transform.rotation);
				}
			}
		}
	}
}

function OnDrawGizmos() {
	Gizmos.color = Color(1,1,1,1);
	Gizmos.DrawIcon(transform.position, "dancer.gif");
}

function OnDrawGizmosSelected() {
	//Draw Binding box
	Gizmos.color = Color(0,0,1);
	Gizmos.DrawWireCube(transform.position, Vector3(1.5,2.5,1.5));
	
	//Draw Spawn Ray
	Gizmos.color = Color (1,1,0);
	Gizmos.DrawRay(transform.position, transform.TransformDirection(Vector3.forward) * 2);
	
	//Draw Spawn Range
	Gizmos.color = Color(0,1,1);
	Gizmos.DrawWireSphere(transform.position, spawnRange);
	
	//Draw NoSpawn Range
	Gizmos.color = Color(1,0,0);
	Gizmos.DrawWireSphere(transform.position, noSpawnRange);
}

function spawn(count : int) {
	spawnCount = count;
}