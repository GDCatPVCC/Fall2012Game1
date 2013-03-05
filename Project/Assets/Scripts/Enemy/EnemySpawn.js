#pragma strict

var spawnRange : int = 25;
var noSpawnRange : int = 5;
var enemyPrefab : GameObject;

//var disableRenderCheck : boolean = false;

var spawnCount : int = 0;
var weighPoints:Transform[] = null;

var player : Transform;
var deathFX : GameObject;

function Start () {
	//	enemyPrefab = Resources.Load("Assets/Test/Resources/TylerAITestPrefab.prefab");
	//player = GameObject.FindWithTag("Player").transform;
}

function Update () {
	
	//if spawnable
	if (spawnCount > 0) {
	
		//Mesure distance to player
		//Debug.Log(transform.position);
		//Debug.Log(player.position);
		var distanceToPlayer = Vector3.Distance(transform.position, player.position);
		
		//Is in range
		if (distanceToPlayer < spawnRange) {
			//if in range
			
			//Check if outside of noSpawnRange
			if(distanceToPlayer > noSpawnRange) {
				//outside of no spawn range
				
				Debug.Log("outside of no spawn zone");
				
				var hit:RaycastHit;
				//if (Physics.Raycast(transform.position, player.position - transform.position, hit)) {
				Physics.Raycast(transform.position, player.position - transform.position, hit);
				//Debug.Log(hit.collider.tag);
					if (!(hit.collider.tag == "Player")) {
						//Debug.Log("SPAWNING");
						//Reduce counter
						spawnCount--;
						//Spawn Enemy
						var tyty:TylerAI = enemyPrefab.GetComponent("TylerAI");
						tyty.waypoints = weighPoints;
						tyty.player = player;
						tyty.deathFX = this.deathFX;
						Debug.Log("You're close");
						var temp:GameObject = Instantiate(enemyPrefab, transform.position, transform.rotation);
						temp.tag = "Enemy";
					//}
				}
			}
		}
	}
}

function OnDrawGizmos() {
	Gizmos.color = Color(1,1,1,1);
	Gizmos.DrawIcon(transform.position, "mr_yuk.png");
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