export default class AudioPlayer {

	// Private fields
	
	#audio = document.querySelector('#audio');
	#playPauseButton = document.querySelector('#play-pause-button');
	#progressBar = document.querySelector('.audio-player__progress');
	#progress = document.querySelector('.audio-player__progress__fill');
	#progressThumb = this.#progress?.querySelector('.audio-player__thumb');
	#volumeSlider = document.querySelector('.audio-player__volume');
	#muteButton = document.querySelector('#mute-button');
	#volumeContainer = document.querySelector('.audio-player__volume-container');
	#volumeLevel = document.querySelector('.audio-player__volume__fill');
	#volumeThumb = this.#volumeLevel?.querySelector('.audio-player__thumb');
	#timestamp = document.querySelector('.audio-player__timestamp');
	#isPlaying = false;
	#dragType = null;
	#volumeBeforeMute = null;

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
		this.#toggleClasses(
			this.#playPauseButton.querySelector('span.icon'),
			'icon-play',
			'icon-pause'
		);
	}

	#toggleMute() {
		if (this.#audio.volume === 0) {
			this.#audio.volume = this.#volumeBeforeMute || 1;
		} else {
			this.#volumeBeforeMute = this.#audio.volume;
			this.#audio.volume = 0;
		}
		this.#setVolumeLevel();
	}

	#updateProgress = () => {
		const progressPercentage = (this.#audio.currentTime / this.#audio.duration) * 100;
		this.#progress.style.width = `${progressPercentage}%`;

		const currentMinutes = Math.floor(this.#audio.currentTime / 60);
		const currentSeconds = Math.floor(this.#audio.currentTime - currentMinutes * 60);

		const remainingTime = this.#audio.duration - this.#audio.currentTime;
		const remainingMinutes = Math.floor(remainingTime / 60);
		const remainingSeconds = Math.floor(remainingTime - remainingMinutes * 60);

		this.#timestamp.innerText = `${remainingMinutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;

		const progressThumb = this.#progress.querySelector('.audio-player__thumb');
		progressThumb.style.left = `${progressPercentage}%`;
	};

	#setTime = (e) => {
		const clickPositionInBar = e.clientX - this.#progressBar.getBoundingClientRect().left;
		const progressPercentage = (clickPositionInBar / this.#progressBar.offsetWidth) * 100;
		this.#audio.currentTime = (progressPercentage / 100) * this.#audio.duration;
	};

	#setVolume = (e) => {
		const clickPositionInBar = e.clientX - this.#volumeSlider.getBoundingClientRect().left;
		const volumePercentage = (clickPositionInBar / this.#volumeSlider.offsetWidth) * 100;
		const volume = volumePercentage / 100;

		this.#audio.volume = Math.min(1, volume);
		this.#setVolumeLevel();
	};

	#setVolumeLevel() {
		const volumePercentage = this.#audio.volume * 100;
		this.#volumeLevel.style.width = `${volumePercentage}%`;

		const volumeThumb = this.#volumeLevel.querySelector('.audio-player__thumb');
		volumeThumb.style.left = `${volumePercentage}%`;

		const isMuted = this.#audio.volume < 0.1;
		const volumeIcon = this.#muteButton.querySelector('span.icon');

		if (isMuted) {
			volumeIcon.classList.remove('icon-volume');
			volumeIcon.classList.add('icon-volume-mute');
		} else {
			volumeIcon.classList.remove('icon-volume-mute');
			volumeIcon.classList.add('icon-volume');
		}
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
				newVolume = Math.max(0, Math.min(1, newVolume)); // Ensures newVolume is in the range [0, 1]
				this.#audio.volume = newVolume;
				this.#setVolumeLevel();
			}
		}
	}

	#startDrag = (e, type) => {
		e.preventDefault();
		document.addEventListener('mousemove', this.#drag);
		document.addEventListener('mouseup', this.#stopDrag);
		this.#dragType = type;
	};

	#drag = (e) => {
		let slider, setFunction;
		if (this.#dragType === 'progress') {
			slider = this.#progressBar;
			setFunction = this.#setTime;
		} else {
			slider = this.#volumeSlider;
			setFunction = this.#setVolume;
		}

		const rect = slider.getBoundingClientRect();
		const x = e.clientX - rect.left; // x position within the element
		const width = rect.right - rect.left;

		if (x >= 0 && x <= width) {
			const progressPercentage = (x / width) * 100;

			const clickEvent = new MouseEvent('click', {
				clientX: x + rect.left,
			});

			setFunction(clickEvent);

			// Update the progress thumb position in real-time
			const thumb = slider.querySelector('.audio-player__thumb');
			thumb.style.left = `${progressPercentage}%`;

			// Update the progress fill width in real-time
			const progressFill = slider.querySelector('[class*="__fill"]');
			progressFill.style.width = `${progressPercentage}%`;
		}
	};

	#stopDrag = () => {
		document.removeEventListener('mousemove', this.#drag);
		document.removeEventListener('mouseup', this.#stopDrag);
	};

	// Public methods
	
	init() {

		if (!this.#audio) {
			return;
		}

		this.#muteButton?.addEventListener('click', () => this.#toggleMute());
		this.#playPauseButton.addEventListener('click', () => this.#togglePlayPause());
		this.#audio.addEventListener('timeupdate', () => this.#updateProgress());
		this.#progressBar.addEventListener('click', (e) => this.#setTime(e));
		this.#volumeSlider?.addEventListener('click', (e) => this.#setVolume(e));
		this.#progressBar.addEventListener('keydown', (e) => this.#handleKeyDown(e));
		this.#volumeSlider?.addEventListener('keydown', (e) => this.#handleKeyDown(e));

		// Set the initial volume of the audio to 1 if it doesn't already have a value
		if (isNaN(this.#audio.volume) || this.#audio.volume === 0) {
			this.#audio.volume = 1;
		}

		// Set the initial position of the volume thumb and fill
		this.#setVolumeLevel();

		// Drag handlers
		this.#progressThumb?.addEventListener('mousedown', (e) => this.#startDrag(e, 'progress'));
		this.#volumeThumb?.addEventListener('mousedown', (e) => this.#startDrag(e, 'volume'));

		// Add an event listener for the loadedmetadata event
		this.#audio.addEventListener('loadedmetadata', () => {
			this.#updateProgress();
		});

	}
}