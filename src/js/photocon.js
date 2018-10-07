const photoconDetailImg =  document.getElementById('photoconDetailImg');
const photoconNavi = document.getElementById('photoconNavi');
const prev = photoconNavi.querySelector('.photocon_detail_menu_navi_prev');
const next =  photoconNavi.querySelector('.photocon_detail_menu_navi_next');

// adjust photo position
if ( photoconDetailImg ) {

    let windowWidth;
    let windowHeight;
    let timer = false;

    const ua = window.navigator.userAgent;
    const $photo = photoconDetailImg;

    const func = () => {
        if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0 || ua.indexOf('Mobile') > 0) {
            return false;
        }

        if (timer !== false) {
            clearTimeout(timer);
        }

        timer = setTimeout( () => {
            windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        
            $photo.style.maxHeight = windowHeight - 20 + 'px'
        
        }, 100);

    }

    window.addEventListener('load', func, false);
    window.addEventListener('resize', func, false);


    if ( photoconNavi ) {
        let windowWidth, positionTop, scrollTop;
        
        const scrollFunc = () => {
            positionTop = photoconDetailImg.getBoundingClientRect().top + window.pageYOffset + photoconDetailImg.clientHeight / 2;
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

            if ( prev ) {
                prev.style.top = (windowWidth >= 1200 ) ? `${positionTop}px` : '';
                prev.style.webkitTransform = (windowWidth >= 1200 ) ? `translateY(-${scrollTop}px)` : '';
                prev.style.transform = (windowWidth >= 1200 ) ? `translateY(-${scrollTop}px)` : '';           
            }
            if ( next ) {
                next.style.top = (windowWidth >= 1200 ) ? `${positionTop}px` : '';
                next.style.webkitTransform = (windowWidth >= 1200 ) ? `translateY(-${scrollTop}px)` : '';
                next.style.transform = (windowWidth >= 1200 ) ? `translateY(-${scrollTop}px)` : '';
            }
            
        };

        window.addEventListener('DOMContentLoaded', scrollFunc, false);
        window.addEventListener('resize', scrollFunc, false);
        window.addEventListener('scroll', scrollFunc, false);
        window.addEventListener('load', scrollFunc, false);

    }

}



// URL select

const urlSelectBtn = document.getElementById('urlSelectBtn');
const urlBox = document.getElementById('urlBox');
if (urlSelectBtn && urlBox) {
    urlSelectBtn.addEventListener('click', () => {
        urlBox.select();
    });
}