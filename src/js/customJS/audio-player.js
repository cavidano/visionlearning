export default class AudioPlayer {

    // Private fields

    #audio;
    #playPauseButton;
    #progressBar;
    #progress;
    #volumeSlider;
    #volumeLevel;
    #timestamp;
    #isPlaying;

    // Private methods

    #toggleClasses(element, class1 = null, class2 = null) {
        if (element.classList.contains(class1)) {
            element.classList.remove(class1);
            element.classList.add(class2);
        } else {
            element.classList.remove(class2);
            element.classList.add(class1);
        }
    }

    #togglePlayPause() {
        if (this.#isPlaying) {
            this.#audio.pause();
        } else {
            this.#audio.play();
        }
        this.#isPlaying = !this.#isPlaying;
        this.#toggleClasses(this.#playPauseButton.querySelector('span.icon'), 'icon-play', 'icon-pause');
    }

    #updateProgress() {
        const progressPercentage = (this.#audio.currentTime / this.#audio.duration) * 100;
        this.#progress.style.width = `${progressPercentage}%`;

        const currentMinutes = Math.floor(this.#audio.currentTime / 60);
        const currentSeconds = Math.floor(this.#audio.currentTime - currentMinutes * 60);
        
        const totalMinutes = Math.floor(this.#audio.duration / 60);
        const totalSeconds = Math.floor(this.#audio.duration - totalMinutes * 60);

        this.#timestamp.innerText = `${currentMinutes.toString().padStart(2, '0')}:${currentSeconds.toString().padStart(2, '0')} / ${totalMinutes.toString().padStart(2, '0')}:${totalSeconds.toString().padStart(2, '0')}`;
    }

    #setTime(e) {
        const clickPositionInBar = e.clientX - this.#progressBar.getBoundingClientRect().left;
        const progressPercentage = (clickPositionInBar / this.#progressBar.offsetWidth) * 100;
        this.#audio.currentTime = (progressPercentage / 100) * this.#audio.duration;
    }

    #setVolume(e) {
        const clickPositionInBar = e.clientX - this.#volumeSlider.getBoundingClientRect().left;
        const volumePercentage = (clickPositionInBar / this.#volumeSlider.offsetWidth) * 100;
        this.#audio.volume = volumePercentage / 100;
        this.#setVolumeLevel();
    }

    #setVolumeLevel() {
        const volumePercentage = this.#audio.volume * 100;
        this.#volumeLevel.style.width = `${volumePercentage}%`;
    }

    #handleKeyDown(e) {
        const ARROW_LEFT = 37;
        const ARROW_RIGHT = 39;
        if (e.keyCode === ARROW_LEFT || e.keyCode === ARROW_RIGHT) {
            if (e.currentTarget === this.#progressBar) {
                this.#audio.currentTime += e.keyCode === ARROW_LEFT ? -5 : 5;
                this.#updateProgress();
            } else if (e.currentTarget === this.#volumeSlider) {
                let newVolume = this.#audio.volume + (e.keyCode === ARROW_LEFT ? -0.05 : 0.05);
                newVolume = Math.max(0, Math.min(1, newVolume));  // Ensures newVolume is in the range [0, 1]
                this.#audio.volume = newVolume;
                this.#setVolumeLevel();
            }
        }
    }

    // Public methods

    init() {

        this.#audio = document.querySelector('#audio');
        this.#playPauseButton = document.querySelector('#play-pause-button');
        this.#progressBar = document.querySelector('.audio-player__progress');
        this.#progress = document.querySelector('.audio-player__progress__fill');
        this.#volumeSlider = document.querySelector('.audio-player__volume');
        this.#volumeLevel = document.querySelector('.audio-player__volume__fill');
        this.#timestamp = document.querySelector('#timestamp');

        this.#isPlaying = false;

        this.#playPauseButton.addEventListener('click', () => this.#togglePlayPause());
        this.#audio.addEventListener('timeupdate', () => this.#updateProgress());
        this.#progressBar.addEventListener('click', (e) => this.#setTime(e));
        this.#volumeSlider.addEventListener('click', (e) => this.#setVolume(e));
        this.#progressBar.addEventListener('keydown', (e) => this.#handleKeyDown(e));
        this.#volumeSlider.addEventListener('keydown', (e) => this.#handleKeyDown(e));
        this.#audio.addEventListener('loadedmetadata', () => this.#updateProgress());

        this.#setVolumeLevel();
    }

}
