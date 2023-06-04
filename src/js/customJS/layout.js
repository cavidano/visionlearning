import { matchMedia } from '../utilities';

export default class Layout {

    #discList = document.querySelectorAll('.grid--discipline .backdrop');

    init() {

        let time;

        let isDesktop = matchMedia(1200).matches;

        console.log(isDesktop)

        this.#discList.forEach((disc) => {

            const handleMouseEnter = (event) => {
            
                event.preventDefault();
                
                time = setTimeout(() => {
                    disc.classList.remove('unfocused');
                    disc.classList.add('focused');
                }, 500);
                
            }

            const handleMouseLeave = (event) => {

                event.preventDefault();
                
                clearTimeout(time);

                if (disc.classList.contains('focused')) {
                    
                    disc.classList.remove('focused');
                    disc.classList.add('unfocused');

                    disc.addEventListener('animationend', () => {
                        disc.classList.remove('unfocused');
                    });
                }
                
            }

            if(isDesktop) {
                disc.addEventListener('mouseenter', handleMouseEnter);
                disc.addEventListener('mouseleave', handleMouseLeave);
            } else {
                disc.removeEventListener('mouseenter', handleMouseEnter);
                disc.removeEventListener('mouseleave', handleMouseLeave);
            }

        });
    }
}