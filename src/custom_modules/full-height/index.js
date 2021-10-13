//////////////////////////////////////////////
// Full Height
//////////////////////////////////////////////

export default class FullHeight {

    constructor() {
        
        const bannerTarget = document.querySelector('.full-height');

        if (bannerTarget) {
            
            const headerHeight = document.getElementById('global-header').offsetHeight;
            const footerHeight = document.getElementById('global-footer').offsetHeight;

            const setBannerHeight = () => {

                const windowHeight = window.innerHeight;

                bannerTarget.style.height = (windowHeight - headerHeight) + 'px';
            }

            setBannerHeight();
            window.addEventListener('resize', setBannerHeight);

        };

    }
}