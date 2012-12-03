#pragma strict
//destroys the bolt on contact with a wall or something
function OnCollisionEnter( collision : Collision )
{
	var contact : ContactPoint = collision.contacts[0];
	Destroy( gameObject,4);
}
