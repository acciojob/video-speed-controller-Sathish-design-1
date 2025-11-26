const video = document.getElementById('video');
const playButton = document.getElementById('playButton');
const volumeControl = document.getElementById('volume');
const playbackSpeedControl = document.getElementById('playbackSpeed');
const rewindButton = document.getElementById('rewindButton');
const forwardButton = document.getElementById('forwardButton');
const progressFilled = document.querySelector('.progress__filled');

playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playButton.textContent = '❚ ❚'; // Change to pause symbol
    } else {
        video.pause();
        playButton.textContent = '►'; // Change to play symbol
    }
});

volumeControl.addEventListener('input', (e) => {
    video.volume = e.target.value;
});

playbackSpeedControl.addEventListener('input', (e) => {
    video.playbackRate = e.target.value;
});

rewindButton.addEventListener('click', () => {
    video.currentTime -= 10;
});

forwardButton.addEventListener('click', () => {
    video.currentTime += 25;
});

video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
});