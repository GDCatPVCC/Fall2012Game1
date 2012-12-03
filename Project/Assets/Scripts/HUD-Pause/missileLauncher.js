#pragma strict
//creates the bolt/bullet and fires it
var projectile : Rigidbody;
var speed = 20;

function Update()
{
 	if( Input.GetButtonDown( "Fire1" ) )
  	{
  		var instantiatedProjectile : Rigidbody = Instantiate(projectile, transform.position, transform.rotation );
  		instantiatedProjectile.velocity = transform.TransformDirection( Vector3( 0, 0, speed ) );
 		Physics.IgnoreCollision( instantiatedProjectile. collider,transform.root.collider );
  		//plays the animation
  		animation.Play("Take 001");
 	}
}