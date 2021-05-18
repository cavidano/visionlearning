import "./_style.scss";

//////////////////////////////////////////////
// Collapse
//////////////////////////////////////////////

export default class Collapse {

    constructor() {

        const collapseButtonList = document.querySelectorAll("[data-toggle='collapse']");

        collapseButtonList.forEach((collapseButton) => {
            
            collapseButton.setAttribute("aria-expanded", false);
            
            collapseButton.addEventListener("click", (event) => {

                const currentCollapse = event.target;
    
                const collapseTargetID = currentCollapse.getAttribute("data-target").replace(/#/, "");
    
                const collapseTarget = document.getElementById(collapseTargetID);

                let expanded = currentCollapse.getAttribute("aria-expanded");

                if (expanded === "true") {
                    collapseButton.setAttribute("aria-expanded", false);
                } else if (expanded === "false") {
                    collapseButton.setAttribute("aria-expanded", true);
                }
                
                collapseTarget.classList.toggle("shown");
    
            });

        });
        
    }
}