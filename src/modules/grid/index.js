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

            disc.addEventListener("mouseover", (event) => {

                event.preventDefault();

                time = setTimeout(() => {
                    disc.classList.add("focused");
                }, 750);

            });

            disc.addEventListener("mouseout", (event) => {

                event.preventDefault();
                
                clearTimeout(time);
                disc.classList.remove("focused");

            });

        });
    }
}