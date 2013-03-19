#pragma strict
//creates the bolt/bullet and fires it
var projectile : Rigidbody;
var speed = 20;
var myTimer : float = 0;
var FX:GameObject;

function Update()
{
	//On Cooldown
	if(myTimer > 0)
	{
  		myTimer -= Time.deltaTime;
 	}
 	//cooldown done.  Can fire.
	if( myTimer <=0)
	{
	 	if( Input.GetButtonDown( "Fire1" ) )
  		{
  			//animate the bow
  			animation.Play("Take 001");
  			//create the object
  			var instantiatedProjectile : Rigidbody = Instantiate(projectile, transform.position, transform.rotation );
  			instantiatedProjectile.velocity = transform.TransformDirection( Vector3( 0, 0, speed ) );
  			
  			var script:projectile = instantiatedProjectile.gameObject.GetComponent("projectile");
  			script.effect = FX;
 			
 			Physics.IgnoreCollision( instantiatedProjectile.collider,transform.root.collider );
  			//set cooldown time
  			myTimer = 2.8;
 		}
 	}
}