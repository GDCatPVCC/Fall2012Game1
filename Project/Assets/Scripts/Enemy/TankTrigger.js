#pragma strict

var tankSong : AudioSource;
var bgSong : AudioSource;
private var fading : boolean;
private var dVolume : float = .5;
private var nextVol : float = 0;

function Start () {
	//start the song with no volume
	tankSong.loop = false;
	tankSong.volume = 0;
}

function Update () {
	//stop it if the fading is done.
	//bgSong done AND tankSong is maxed
	if (fading && bgSong.volume > 0 && tankSong.volume < 1) {
		//adjust the bg song volume
		nextVol = bgSong.volume - dVolume * Time.deltaTime;
		
		//check for negative volumes
		if (nextVol < 0)
			nextVol = 0;
		bgSong.volume = nextVol;
		
		//adjust tank's song volume
		nextVol = tankSong.volume + dVolume * Time.deltaTime;
		//Debug.Log(nextVol);
		//nextVol can't be over 1 - For Continuity
		if (nextVol > 1)
			nextVol = 1;
		tankSong.volume = nextVol;
	}
}

function OnTriggerEnter(other : Collider) {
	Debug.Log(tankSong.clip.frequency);
	//TODO Everything related to the tank spawning
	//Music. etc etc
	//To stop the song, link it to the tank and fade on kill.
	fading = true;
	tankSong.Play();
}