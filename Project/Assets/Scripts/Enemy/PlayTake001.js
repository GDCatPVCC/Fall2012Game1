#pragma strict

function Start () {
	
}

function Update () {
	if (!animation.IsPlaying("Take 001")) {
		Debug.Log("Run Take 001");
		animation.Play("Take 001");
	}
}