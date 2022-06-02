import "./_style.scss";

//////////////////////////////////////////////
// Grid
//////////////////////////////////////////////

export default class Layout {

    constructor() {
        this.discList = document.querySelectorAll('.grid--discipline .backdrop');
    }

    init() {
    
        let time;

        this.discList.forEach((disc) => {

            disc.addEventListener('mouseenter', (event) => {

                event.preventDefault();
                
                time = setTimeout(() => {
                    disc.classList.remove('unfocused');
                    disc.classList.add('focused');
                }, 500);
                
            });

            disc.addEventListener('mouseleave', (event) => {

                event.preventDefault();
                
                clearTimeout(time);

                if (disc.classList.contains('focused')) {
                    
                    disc.classList.remove('focused');
                    disc.classList.add('unfocused');

                    disc.addEventListener('animationend', () => {
                        disc.classList.remove('unfocused');
                    });
                }

            });

        });
    }
}