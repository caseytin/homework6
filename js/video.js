var video = document.querySelector("#myVideo"); 

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() { 
	console.log("Play Video");
	video.play();
} 

function pauseVid() { 
	console.log("Pause Video");
	video.pause();
} 

function decreaseSpeed() {
	video.playbackRate = video.playbackRate * 0.8;
	console.log("Speed is " + video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate = video.playbackRate * 1.25;
	console.log("Speed is " + video.playbackRate);
} 

function skipAhead() {
	// skip 60 seconds
	if (video.currentTime > video.duration) {
		// reset playback
		video.load();
		// reset speed
		playbackRate = 1;
	}
	video.currentTime = video.currentTime + 60;
	console.log("Current location is " + video.currentTime);
} 

function mute() { 
	if (video.muted) {
		video.muted = false;
		console.log("Unmuted");
	}
	else {
		video.muted = true;
		console.log("Muted");
	}
}

function changeVolume() {
	// todo
	console.log("Volume is " + video.volume);
}
	
function gray() { 
	video.classList.add("grayscale");
	console.log("In grayscale");
}

function color() {
	video.classList.remove("grayscale");
	console.log("In color");
}