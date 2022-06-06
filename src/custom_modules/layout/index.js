import "./_style.scss";

//////////////////////////////////////////////
// Grid
//////////////////////////////////////////////

export default class Layout {

    constructor() {
        this.discList = document.querySelectorAll('.grid--discipline .backdrop');
    }

    init() {

        const mediaQuery = window.matchMedia('(min-width: 1200px)');

        mediaQuery.addEventListener('change', (event) => {

        if (event.matches) {
            console.log('Media Query Matched!');
        } else {
            console.log('Media Query not Matched!')
        }

        });

        ////

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