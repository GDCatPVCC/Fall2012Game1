#pragma strict

function Start () {
	
}

function Update () {
	if (!animation.IsPlaying("Take 001")) {
		Debug.Log("Run dis shit");
		animation.Play("Take 001");
	}
}