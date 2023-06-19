export default class AudioPlayer {
    // Define the properties we're going to use.
    audio;
    playPauseButton;
    progressBar;
    progress;
    volumeSlider;
    timestamp;
    isPlaying = false;

    // The initialization method
    init() {
        this.audio = document.querySelector('.audio-player audio');
        this.playPauseButton = document.querySelector('.audio-player__controls .button--icon-only');
        this.progressBar = document.querySelector('.audio-player__progress');
        this.progress = document.querySelector('.audio-player__progress div');
        this.volumeSlider = document.querySelector('.audio-player__volume input[type="range"]');
        this.timestamp = document.querySelector('.audio-player__timestamp');

        this.setupEventListeners();
    }

    // The function to setup our event listeners
    setupEventListeners() {
        this.playPauseButton.addEventListener('click', this.togglePlayPause.bind(this));
        this.audio.addEventListener('timeupdate', this.updateProgress.bind(this));
        this.volumeSlider.addEventListener('input', this.updateVolume.bind(this));
        this.progressBar.addEventListener('click', this.seek.bind(this));
    }

    togglePlayPause() {
        this.isPlaying ? this.audio.pause() : this.audio.play();
        this.isPlaying = !this.isPlaying;
        this.toggleClasses(this.playPauseButton.querySelector('span.icon'), 'icon-play', 'icon-pause');
    }

    updateProgress() {
        const progressPercentage = (this.audio.currentTime / this.audio.duration) * 100;
        this.progress.style.width = `${progressPercentage}%`;

        const minutes = Math.floor(this.audio.currentTime / 60);
        const seconds = Math.floor(this.audio.currentTime - minutes * 60);
        this.timestamp.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    updateVolume() {
        this.audio.volume = this.volumeSlider.value;
    }

    seek(e) {
        const clickPositionInBar = e.clientX - this.progressBar.getBoundingClientRect().left;
        const progressPercentage = (clickPositionInBar / this.progressBar.offsetWidth) * 100;
        this.audio.currentTime = (progressPercentage / 100) * this.audio.duration;
    }

    toggleClasses(element, class1 = null, class2 = null) {
        if (element.classList.contains(class1)) {
            element.classList.remove(class1);
            element.classList.add(class2);
        } else {
            element.classList.remove(class2);
            element.classList.add(class1);
        }
    }
}
