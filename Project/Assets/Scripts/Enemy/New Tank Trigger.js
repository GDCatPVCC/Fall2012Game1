#pragma strict

var gameMaster : GameMaster;
var tankSong : AudioSource;


function Start () {
	//this will loop the tank song until something stops it
	//ON DEATH
	tankSong.loop = true;
}

function OnTriggerEnter(other : Collider) {
	Debug.Log(tankSong.clip.frequency);
	tankSong.Play(tankSong.clip.frequency*(2-gameMaster.musicCount));
}