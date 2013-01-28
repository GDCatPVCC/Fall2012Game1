#pragma strict

function Start () {

}

function Update () {

}

//TO GET THE TRIGGER TO WORK, YOU ONLY NEED TO ADD A COLLIDER AND SET isTrigger to TRUE.
//The character will move freely through the object, but call OnTriggerEnter(other:Collider){}
//whenever something hits it.  To detect if it's the player, use .getComponent("PlayerController") != null
function OnTriggerEnter(other:Collider) {
	Debug.Log("Hit");
}