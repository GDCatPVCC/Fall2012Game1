#pragma strict

function Start () {

}

function Update () {
	var hit:RaycastHit;
	//Debug.Log(Physics.Raycast(transform.position, transform.forward, hit));
	var charact = GetComponent(CharacterController);
	Debug.Log(Physics.CapsuleCast(transform.position+Vector3.up*charact.height/2, transform.position+Vector3.down*charact.height/2, .04, transform.forward, hit));
	Debug.DrawRay(hit.point, hit.normal, Color.red, 10, false);
}