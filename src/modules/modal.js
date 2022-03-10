import {animate, clearURL} from './helpers'
const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const btnClose = modal.querySelector('.popup-close');
    const popupContent = modal.querySelector('.popup-content');
    const width = screen.availWidth;
    
    if(width >= 768) {
        // modal.style.transition = "all 1s ease ";
        modal.style.opacity = 0;
        modal.style.width = 'auto';
        modal.style.display = "block";
        popupContent.style.display = 'none';
        
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                popupContent.style.display = 'block';
                popupContent.display = 'block';
                // modal.style.opacity = 1;
                modal.style.width = '100%';
                animate({
                    duration: 500,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                        modal.style.opacity = progress;
                    },
                });
                clearURL()
            });
        });
        modal.addEventListener('click', (event) => {
            if (!event.target.closest('.popup-content') || event.target.classList.contains('popup-close')) {
                clearURL();
                modal.style.width = 'auto';
                popupContent.style.display = 'none';
                animate({
                    duration: 500,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                        modal.style.opacity = Math.abs(progress-1);
                    },
                });
            }
            clearURL()
        });
        
    } else {
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.style.display = "block";   
            });
        });
        btnClose.addEventListener('click', () => {
            modal.style.display = "none";
        });
    }
};
export default modal;