#pragma strict
//destroys the bolt on contact with a wall or something
function OnCollisionEnter( collision : Collision )
{
	var contact : ContactPoint = collision.contacts[0];
	this.rigidbody.velocity = new Vector3(0,0,0);
	this.rigidbody.angularVelocity = new Vector3(0,0,0);
	Destroy( gameObject,20);
}
