import "./_style.scss";

//////////////////////////////////////////////
// Grid
//////////////////////////////////////////////

export default class Layout {

    #discList = document.querySelectorAll('.grid--discipline .backdrop');

    init() {

        const mediaQuery = window.matchMedia('(min-width: 1200px)');

        let isDesktop;

        function checkMediaQuery() {
        
            if (mediaQuery.matches) {
                console.log('Media Query Matched!');
                isDesktop = true;
            } else {
                console.log('Media Query not Matched!');
                isDesktop = false;
            }
        }

        mediaQuery.addEventListener('change', checkMediaQuery);
        checkMediaQuery();

        ////

        let time;

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