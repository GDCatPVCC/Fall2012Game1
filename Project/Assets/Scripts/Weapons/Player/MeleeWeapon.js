#pragma strict

//This variable can be passed to the controller to be handled
var objectHit : GameObject;
//Feel free to change the variable name, but this is basically how much damage the weapon does and is public
var attackPower : int = 50;
//TODO
//var WeaponController : <script>;

//this detects when the object hits ANY OTHER object
function OnCollisionEnter(collision : Collision) {
	if (animation.IsPlaying("Take 001")) {
		//displays the name of the object hit
		Debug.Log("Hit something named "+collision.gameObject.name);
		try {
			//This will execute if Unity finds a BasicEnemyManager attached to the objecthit
			collision.gameObject.GetComponent(BasicEnemyManager).TakeDamage(attackPower);
			Debug.Log("Good aim!");
		} catch (e : System.NullReferenceException) {
			//will run if...
			Debug.Log("You hit something that doesn't have a BasicEnemyManager script attached");
		}
		
		
	}
	
	//I believe that in this spot, we can get the direction vector and add it to the object hit's transform
	//I could be wrong. Needs testing
}

function Update () 
{
	if (Input.GetButtonDown("Fire1"))
	{
		GameObject.Find("simplemelee");
		animation.Play("Take 001");
	}
}