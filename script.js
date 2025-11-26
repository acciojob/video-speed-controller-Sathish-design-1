const video = document.querySelector('.player__video');
const playButton = document.querySelector('.toggle');
const volumeSlider = document.querySelector('.volume');
const playbackSpeedSlider = document.querySelector('.playbackSpeed');
const rewindButton = document.querySelector('.rewind');
const forwardButton = document.querySelector('.forward');
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

volumeSlider.addEventListener('input', (e) => {
    video.volume = e.target.value;
});

playbackSpeedSlider.addEventListener('input', (e) => {
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