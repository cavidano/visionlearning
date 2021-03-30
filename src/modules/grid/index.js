import "./_style.scss";
import "./_theme.scss";

//////////////////////////////////////////////
// Alerts
//////////////////////////////////////////////

export default class Grid {

    constructor() {

        const discList = document.querySelectorAll(".discipline-grid .backdrop");
        const discInfoList = document.querySelectorAll(".discipline-grid .backdrop__info");

        let time;

        discList.forEach((disc) => {

            disc.addEventListener("mouseenter", (event) => {

                event.preventDefault();

                time = setTimeout(() => {
                    disc.classList.add("focused");
                }, 500);


            });

            disc.addEventListener("mouseleave", (event) => {

                event.preventDefault();
                
                clearTimeout(time);
                disc.classList.remove("focused");

            });

        });
    }
}