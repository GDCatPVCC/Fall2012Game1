#pragma strict

//hit fx
var effect:GameObject;

//destroys the bolt on contact with a wall or something
function OnCollisionEnter( collision : Collision )
{
	var contact : ContactPoint = collision.contacts[0];
	this.rigidbody.velocity = new Vector3(0,0,0);
	this.rigidbody.angularVelocity = new Vector3(0,0,0);
	this.rigidbody.useGravity = false;
	this.collider.active = false;
	var rot:Quaternion = Quaternion.FromToRotation(Vector3.up, contact.normal);
	if (collision.gameObject.CompareTag("Enemy"))
	{
		var newEffect = Instantiate(effect, contact.point, rot);
		Destroy(newEffect, 3);
	}
	Destroy(gameObject,20);
	try 
	{
			//This will execute if Unity finds a BasicEnemyManager attached to the objecthit
			collision.gameObject.GetComponent(BasicEnemyManager).TakeDamage(100);
			//Debug.Log("Good aim!");
			this.transform.parent = collision.transform;
		} 
	catch (e : System.NullReferenceException) 
	{
			//will run if...
			//Debug.Log("You hit something that doesn't have a BasicEnemyManager script attached");
	}
}