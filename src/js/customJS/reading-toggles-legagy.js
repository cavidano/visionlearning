

//////////////////////////////////////////////
// Reading Toggles
//////////////////////////////////////////////

export default class ReadingToggles {

    constructor() {
        
        // NGSS
        
        const ngssToggleSwitch = document.getElementById('ngss-toggle-switch');
        const ngssTextList = document.querySelectorAll('.ngss');

        const ngssDescContainer = document.querySelector('.ngss-desc-container');

        // Terms

        const termsToggleSwitch = document.getElementById('terms-toggle-switch');
        const termsList = document.querySelectorAll('.term');

        const termDefContainer = document.querySelector('.term-def-container');

        let handleNGSSClick;
        let handleTermClick;

        const removeOldDetails = () => {

            let oldDetailList = document.querySelectorAll('.reading-toggle-detail');

            if(oldDetailList.length > 0) {

                oldDetailList.forEach((item) => {
                    item.remove();
                });
            }

        }

        const turnOnNGSS = () => {

            ngssTextList.forEach((ngss, index) => {

                ngss.classList.add('highlighted');

                ngss.setAttribute('tabindex', index + 1);

                handleNGSSClick = () => {
                    const ngssCat = ngss.getAttribute('data-ngss-cat-full');
                    const ngssDesc = ngss.getAttribute('data-ngss-desc');

                    removeOldDetails();

                    const ngssDescHTML = `
                        <article
                            class="reading-toggle-detail"
                            aria-polite="live"
                            data-ngss-cat="${ngssCat}">

                            <div class="reading-toggle-detail__head">
                                ${ngssCat}
                            </div>

                            <div class="reading-toggle-detail__body">
                                <p>${ngssDesc}</p>
                            </div>
                        </article>      
                    `;

                    ngssDescContainer.insertAdjacentHTML('beforeend', ngssDescHTML);

                    let ngssDescContainerText = ngssDescContainer.querySelector('.reading-toggle-detail');

                    setTimeout(() => {ngssDescContainerText.classList.add('shown')}, 20);

                }

                ngss.addEventListener('click', handleNGSSClick, true);

            });
        }

        const turnOffNGSS = () => {

            ngssToggleSwitch.checked = false;

            ngssTextList.forEach((ngss) => {

                ngss.classList.remove('highlighted');

                ngss.setAttribute('tabindex', -1);

                ngss.removeEventListener('click', handleNGSSClick, true);

            });

            removeOldDetails();
        }

        const turnOnTerms = () => {

            termsList.forEach((term, index) => {

                term.classList.add('highlighted');

                term.setAttribute('tabindex', index + 1);

                handleTermClick = () => {

                    const termTitle = term.innerHTML.toString();

                    const termDef = term.getAttribute('data-term-def');
                    const termUrl = term.getAttribute('data-term-url');
                        
                    removeOldDetails();

                    const termDefHTML = (`
                        <article
                            class="reading-toggle-detail glossary-term"
                            aria-polite="live"
                            data-term-definition>

                            <div class="reading-toggle-detail__head">
                                <strong>Glossary Term</strong>
                            </div>
                        
                            <div class="reading-toggle-detail__body">

                                <h2 class="h6">
                                    ${termTitle}
                                </h2>
                            
                                <p>
                                    ${termDef ? termDef : 'That is not good.'}
                                </p>
                            
                                <p>
                                    <a href="${termUrl ? termUrl : '#1'}">
                                        View in Glossary
                                    </a>
                                </p>

                            </div>
                        
                        </article>                        
                    `);

                    termDefContainer.insertAdjacentHTML('beforeend', termDefHTML);

                    console.log("Carl, you can do this!!", termTitle, termDefContainer);

                    let termDefContainerText = termDefContainer.querySelector('.reading-toggle-detail');

                    setTimeout(() => {termDefContainerText.classList.add('shown')}, 20);
                }

                term.addEventListener('click', handleTermClick);

            });
        }

        const turnOffTerms = () => {

            termsToggleSwitch.checked = false;

            termsList.forEach((term) => {

                term.classList.remove('highlighted');

                term.setAttribute('tabindex', -1);

                term.removeEventListener('click', handleTermClick);

            });

            removeOldDetails();
        }

        //////////////////////////////////////////////
        // Terms
        //////////////////////////////////////////////

        if(termsToggleSwitch){

            termsToggleSwitch.addEventListener('change', (e) => {

                const highlightTerms = e.target.checked;

                if(highlightTerms === true){

                    if(ngssToggleSwitch.checked === true) {
                        turnOffNGSS();
                    }

                    turnOnTerms();

                } else {
                    turnOffTerms();
                }

            });
        }
        
        //////////////////////////////////////////////
        // NGSS
        //////////////////////////////////////////////

        if(ngssToggleSwitch) {

            ngssToggleSwitch.addEventListener('change', (e) => {

                const highlightNGSS = e.target.checked;

                if(highlightNGSS === true) {

                    if(termsToggleSwitch.checked === true) {
                        turnOffTerms();
                    }

                    turnOnNGSS();

                } else {
                    turnOffNGSS();
                }

            });
        
        }       

    }
}