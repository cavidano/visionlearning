export default class AudioPlayer {

    // Private Properties

    #moduleAudio = document.getElementById('module-audio');
    #isPlaying = false;

    // Public Methods

    

    init() {
        this.#moduleAudio.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.playAudio();
        });
    }
}
