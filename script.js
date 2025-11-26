const video = document.querySelector('.player__video');
const playButton = document.querySelector('.player__button');
const volumeSlider = document.querySelector('.player__slider[type="range"]');
const playbackSpeedSlider = document.querySelector('.player__slider[type="range"]:nth-of-type(2)');
const progressBar = document.querySelector('.progress__filled');
const rewindButton = document.querySelector('.rewind');
const forwardButton = document.querySelector('.forward');

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

video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.value = percent;
});

rewindButton.addEventListener('click', () => {
    video.currentTime -= 10;
});

forwardButton.addEventListener('click', () => {
    video.currentTime += 25;
});