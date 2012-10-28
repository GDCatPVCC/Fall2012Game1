#pragma strict

function OnDrawGizmos() {
	Gizmos.color = Color(1,1,1,1);
	Gizmos.DrawIcon(transform.position, "Waypoint.gif");
}

function OnDrawGizmosSelected() {
}
