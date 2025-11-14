const video = document.getElementById('video');
const toggleButton = document.getElementById('toggle');
const rewindButton = document.getElementById('rewind');
const forwardButton = document.getElementById('forward');
const volumeControl = document.getElementById('volume');
const playbackSpeedControl = document.getElementById('playbackSpeed');
const progressFilled = document.querySelector('.progress__filled');

toggleButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        toggleButton.textContent = '❚ ❚'; // Change to pause icon
    } else {
        video.pause();
        toggleButton.textContent = '►'; // Change to play icon
    }
});

rewindButton.addEventListener('click', () => {
    video.currentTime -= 10;
});

forwardButton.addEventListener('click', () => {
    video.currentTime += 25;
});

volumeControl.addEventListener('input', (e) => {
    video.volume = e.target.value;
});

playbackSpeedControl.addEventListener('input', (e) => {
    video.playbackRate = e.target.value;
});

// Update progress bar
video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
});
