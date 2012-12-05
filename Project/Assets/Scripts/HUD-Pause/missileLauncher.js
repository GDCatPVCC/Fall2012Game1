#pragma strict
//creates the bolt/bullet and fires it
var projectile : Rigidbody;
var speed = 20;
var count = 4;

function Update()
{
	if( count <=0)
	{
	 	if( Input.GetButtonDown( "Fire1" ) )
  		{
  			var instantiatedProjectile : Rigidbody = Instantiate(projectile, transform.position, transform.rotation );
  			instantiatedProjectile.velocity = transform.TransformDirection( Vector3( 0, 0, speed ) );
 			Physics.IgnoreCollision( instantiatedProjectile. collider,transform.root.collider );
  			//plays the animation for the crossbow
  			animation.Play("Take 001");
  			count = 4;
 		}
 	}
}