import "./_style.scss";
import "./_theme.scss";

//////////////////////////////////////////////
// Alerts
//////////////////////////////////////////////

export default class Grid {

    constructor() {

        const discList = document.querySelectorAll(".grid--discipline .backdrop");

        let time;

        discList.forEach((disc) => {

            disc.addEventListener("mouseenter", (event) => {

                event.preventDefault();
                
                time = setTimeout(() => {
                    disc.classList.remove("unfocused");
                    disc.classList.add("focused");
                }, 500);
                
            });

            disc.addEventListener("mouseleave", (event) => {

                event.preventDefault();
                
                clearTimeout(time);

                if (disc.classList.contains("focused")) {
                    
                    disc.classList.remove("focused");
                    disc.classList.add("unfocused");

                    disc.addEventListener('animationend', () => {
                        disc.classList.remove("unfocused");
                    });
                }

            });

        });
    }
}