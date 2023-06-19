export default class AudioPlayer {
    #audio;
    #playPauseButton;
    #progressBar;
    #progress;
    #volumeSlider;
    #timestamp;
    #isPlaying;

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
        this.#isPlaying ? this.#audio.pause() : this.#audio.play();
        this.#isPlaying = !this.#isPlaying;
        this.#playPauseButton.setAttribute('aria-label', this.#isPlaying ? 'Pause Audio' : 'Play Audio');
        this.#toggleClasses(this.#playPauseButton.querySelector('span.icon'), 'icon-play', 'icon-pause');
    }

    #updateProgress() {
        const progressPercentage = (this.#audio.currentTime / this.#audio.duration) * 100;
        this.#progress.style.width = `${progressPercentage}%`;
        
        const minutes = Math.floor(this.#audio.currentTime / 60);
        const seconds = Math.floor(this.#audio.currentTime - minutes * 60);

        this.#timestamp.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    #setVolume() {
        this.#audio.volume = this.#volumeSlider.value;
    }

    #setTime(e) {
        const clickPositionInBar = e.clientX - this.#progressBar.getBoundingClientRect().left;
        const progressPercentage = (clickPositionInBar / this.#progressBar.offsetWidth) * 100;
        this.#audio.currentTime = (progressPercentage / 100) * this.#audio.duration;
    }

    #handleKeyDown(e) {
        const step = 5; // Number of seconds to step
        if(e.key === 'ArrowRight') {
            this.#audio.currentTime = Math.min(this.#audio.currentTime + step, this.#audio.duration);
        } else if(e.key === 'ArrowLeft') {
            this.#audio.currentTime = Math.max(this.#audio.currentTime - step, 0);
        }
        this.#updateProgress();
    }

    init() {
        this.#audio = document.querySelector('#audio');
        this.#playPauseButton = document.querySelector('#play-pause-button');
        this.#progressBar = document.querySelector('#progress-bar');
        this.#progress = document.querySelector('#progress');
        this.#volumeSlider = document.querySelector('#volume-slider');
        this.#timestamp = document.querySelector('#timestamp');

        this.#isPlaying = false;

        this.#playPauseButton.addEventListener('click', () => this.#togglePlayPause());
        this.#audio.addEventListener('timeupdate', () => this.#updateProgress());
        this.#volumeSlider.addEventListener('input', () => this.#setVolume());
        this.#progressBar.addEventListener('click', (e) => this.#setTime(e));
        this.#progressBar.addEventListener('keydown', (e) => this.#handleKeyDown(e));

        // Make the progress bar focusable
        this.#progressBar.setAttribute('tabindex', '0');
    }
}
