import './_style.scss';

//////////////////////////////////////////////
// Lightbox
//////////////////////////////////////////////

export default class Lightbox {

  #lightboxImages = document.querySelectorAll('img');

  #lightbox = document.createElement('div');

  #lightboxHTML = (`
    <div class="lightbox__container">
        <img class="lightbox__image" src="https://source.unsplash.com/1600x900" />
        <p class="lightbox__caption">A caption for the image.</p>
    </div>
  `);
  
  init() {

    this.#lightbox.classList.add('lightbox');

    this.#lightbox.innerHTML = this.#lightboxHTML;

    this.#lightbox.setAttribute('aria-hidden', true);

    document.body.appendChild(this.#lightbox);

    const lightboxIMG = document.querySelector('.lightbox__image');
    const lightboxCaption = document.querySelector('.lightbox__caption');

    this.#lightboxImages.forEach((image) => {

      image.addEventListener('click', ()  => {

        document.querySelector('body').classList.add('modal-open');

        this.#lightbox.setAttribute('aria-hidden', false);

        lightboxIMG.classList.add('box-shadow-3', 'border-radius');

        lightboxIMG.src = image.src;
        lightboxIMG.alt = image.alt;
        lightboxCaption.innerHTML = image.alt;

      }); 
    
    });

    this.#lightbox.addEventListener('click', (e)  => {

      if(e.target !== e.currentTarget) return;

      this.#lightbox.setAttribute('aria-hidden', true);
      
      document.querySelector('body').classList.remove('modal-open');
        
    }); 


  }

}