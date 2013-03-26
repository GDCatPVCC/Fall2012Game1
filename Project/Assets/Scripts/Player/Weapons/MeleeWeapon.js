#pragma strict

var objectHit : GameObject;
//How much damage the weapon does
var attackPower : int = 50;
var power : float = 5;

//this detects when the object hits ANY OTHER object
function OnCollisionEnter(collision : Collision) {
	if (animation.IsPlaying("Swing")) {
		//displays the name of the object hit
		//Debug.Log("Hit something named "+collision.gameObject.name);
		try {
			//This will execute if Unity finds a BasicEnemyManager attached to the objecthit
			collision.gameObject.GetComponent(BasicEnemyManager).TakeDamage(attackPower);
			var dir : Vector3 = collision.gameObject.transform.position-this.transform.position;
			var force = dir * power;
			gameObject.rigidbody.velocity += force;
			Debug.Log("hit");
			//Debug.Log("Good aim!");
		} catch (e : System.NullReferenceException) {
			//will run if...s
			//Debug.Log("You hit something that doesn't have a BasicEnemyManager script attached");
		}
		
		
	}
}

function Update () 
{
	if (Input.GetButtonDown("Fire1"))
	{
		//Debug.Log("Swingin'");
		animation["Swing"].speed = 2.5;
		animation.Play("Swing");
	}
}