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
	video.currentTime = video.currentTime + 60;
	if (video.ended) {
		// reset playback
		video.load();
		video.play();
		// reset speed
		playbackRate = 1;
	}
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
	console.log(volumeSlider.value);
	var slider_val = document.querySelector('#volume').innerHTML; 
	// update slider value
	slider_val = volumeSlider.value;
	// update new video volume out of 100
	video.volume = slider_val / 100;
	// update html div
	document.querySelector('#volume').innerHTML = slider_val + '%';
}
	
function gray() { 
	video.classList.add("grayscale");
	console.log("In grayscale");
}

function color() {
	video.classList.remove("grayscale");
	console.log("In color");
}