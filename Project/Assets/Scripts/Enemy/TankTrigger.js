#pragma strict

var tankSong : AudioSource;
var bgSong : AudioSource;
private var fading : boolean;
private var dVolume : float = .5;
private var nextVol : float = 0;

function Start () {
	tankSong.loop = false;
	tankSong.volume = 0;
}

function Update () {
	if (fading && bgSong.volume > 0 && tankSong.volume < 1) {
		nextVol = bgSong.volume - dVolume * Time.deltaTime;
		
		if (nextVol < 0)
			nextVol = 0;
		bgSong.volume = nextVol;
		
		nextVol = tankSong.volume + dVolume * Time.deltaTime;
		Debug.Log(nextVol);
		if (nextVol > 1)
			nextVol = 1;
		tankSong.volume = nextVol;
	}
}

function OnTriggerEnter(other : Collider) {
	Debug.Log("HERE COMES THE TANK, MOTHA FUCKA!");
	//TODO Everything related to the tank spawning
	//Music. etc etc
	//To stop the song, link it to the tank and fade on kill.
	fading = true;
	tankSong.Play();
}