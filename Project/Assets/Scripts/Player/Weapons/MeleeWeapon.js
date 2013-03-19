#pragma strict

var objectHit : GameObject;
//How much damage the weapon does
var attackPower : int = 50;

//this detects when the object hits ANY OTHER object
function OnCollisionEnter(collision : Collision) {
	if (animation.IsPlaying("Take 001")) {
		//displays the name of the object hit
		//Debug.Log("Hit something named "+collision.gameObject.name);
		try {
			//This will execute if Unity finds a BasicEnemyManager attached to the objecthit
			collision.gameObject.GetComponent(BasicEnemyManager).TakeDamage(attackPower);
			//Debug.Log("Good aim!");
		} catch (e : System.NullReferenceException) {
			//will run if...
			//Debug.Log("You hit something that doesn't have a BasicEnemyManager script attached");
		}
		
		
	}
}

function Update () 
{
	if (Input.GetButtonDown("Fire1"))
	{
		Debug.Log("Swingin'");
		animation.Play("Take 001");
	}
}