import './_style.scss';

//////////////////////////////////////////////
// Lightbox
//////////////////////////////////////////////

export default class Lightbox {

  #lightbox = document.createElement('div');
  #lightboxImages = document.querySelectorAll('img');

  init() {

    this.#lightbox.classList.add('lightbox');
    this.#lightbox.setAttribute('aria-hidden', true);

    document.body.appendChild(this.#lightbox);

    this.#lightboxImages.forEach((image) => {

      image.addEventListener('click', (e)  => {

        document.querySelector('body').classList.add('modal-open');

        this.#lightbox.setAttribute('aria-hidden', false);

        const img = document.createElement('img');

        img.src = image.src;
        img.classList.add('box-shadow-3', 'border-radius');

        while(this.#lightbox.firstChild) {
          this.#lightbox.removeChild(this.#lightbox.firstChild);
        }

        this.#lightbox.appendChild(img);
      
      }); 
    
    });

    this.#lightbox.addEventListener('click', (e)  => {

      if(e.target !== e.currentTarget) return;

      this.#lightbox.setAttribute('aria-hidden', true);
      
      document.querySelector('body').classList.remove('modal-open');
        
    }); 


  }

}