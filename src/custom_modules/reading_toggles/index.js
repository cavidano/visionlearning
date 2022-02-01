import './_style.scss';

//////////////////////////////////////////////
// Reading Toggles
//////////////////////////////////////////////

export default class ReadingToggles {

    constructor() {
        
        //////////////////////////////////////////////
        // NGSS
        //////////////////////////////////////////////

        const ngssToggleSwitch = document.getElementById('ngss-toggle-switch');

        const ngssDescBlock = document.querySelector('.ngss-desc-block');

        // const 

        if(ngssToggleSwitch) {

            const ngssTextList = document.querySelectorAll('.ngss');

            ngssToggleSwitch.addEventListener('change', (e) => {

                const highlightNGSS = e.target.checked;

                if(highlightNGSS === true) {

                    ngssTextList.forEach((mark, index) => {

                        mark.classList.add('highlighted');

                        mark.setAttribute('tabindex', index + 1);

                        mark.addEventListener('click', () => {

                            const ngssCat = mark.getAttribute('data-ngss-cat');
                            const ngssText = mark.getAttribute('data-ngss');

                            let oldNGSSDesc = ngssDescBlock.querySelectorAll('.ngss-desc-block__text');

                            oldNGSSDesc.forEach((desc) => {
                                desc.remove();
                            });

                            const ngssDescHTML = (`
                                <article class="ngss-desc-block__text box-shadow-1" data-ngss-cat="${ngssCat}" aria-polite="live">
                                    <p class="font-size-md text-transform-uppercase margin-bottom-1">
                                        <strong>
                                            <em>${ngssCat}</em>
                                        </strong>
                                    </p>
                                    <p>
                                        ${ngssText ? ngssText : 'That is not good.'}
                                    </p>
                                </article>
                            `);

                            ngssDescBlock.insertAdjacentHTML('beforeend', ngssDescHTML);

                            let ngssDescBlockText = ngssDescBlock.querySelector('.ngss-desc-block__text');

                            setTimeout(() => {ngssDescBlockText.classList.add('shown')}, 20);

                        })
                    });

                } else {

                    ngssTextList.forEach((mark) => {

                        mark.classList.remove('highlighted');

                        mark.setAttribute('tabindex', -1);

                        let oldNGSSDesc = ngssDescBlock.querySelectorAll('.ngss-desc-block__text');

                        oldNGSSDesc.forEach((desc) => {
                            desc.remove();
                        });


                    });

                }
        
            });

        }       

    }
}