#pragma strict
//creates the bolt/bullet and fires it
var projectile : Rigidbody;
var speed = 20;
var myTimer : float = 2.5;

function Update()
{
	if(myTimer > 0)
	{
  		myTimer -= Time.deltaTime;
 	}
	if( myTimer <=0)
	{
	 	if( Input.GetButtonDown( "Fire1" ) )
  		{
  			var instantiatedProjectile : Rigidbody = Instantiate(projectile, transform.position, transform.rotation );
  			instantiatedProjectile.velocity = transform.TransformDirection( Vector3( 0, 0, speed ) );
 			Physics.IgnoreCollision( instantiatedProjectile. collider,transform.root.collider );
  			myTimer = 2.5;
 		}
 	}
}