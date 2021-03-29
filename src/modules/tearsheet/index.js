import "./_style.scss";

//////////////////////////////////////////////
// Backdrop
//////////////////////////////////////////////

export default class Tearsheet {

    constructor() {

        const tsToggleButton = document.querySelector("[data-toggle='ts-menu']");

        if(tsToggleButton) {

            tsToggleButton.setAttribute("aria-expanded", false);

            tsToggleButton.addEventListener("click", (event) => {

                const collapseTargetID = event.target.getAttribute("data-target").replace(/#/, "");

                const collapseTarget = document.getElementById(collapseTargetID);

                collapseTarget.classList.toggle("shown");
            });
            
        }

    }
}