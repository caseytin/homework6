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
	// todo
	console.log("Current location is ");
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
	slider = document.querySelector("volumeSlider");
	
	console.log("Volume is " + slider);
}
	
function gray() { 
	video.classList.add("grayscale");
	console.log("In grayscale");
}

function color() {
	video.classList.remove("grayscale");
	console.log("In color");
}