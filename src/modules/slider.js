const slider = (arr) => {
    const {class1, class2, class3, class4, class5, class6} = arr;
    const sliderBlock = document.querySelector(`.${class3}`);
    const slides = document.querySelectorAll(`.${class1}`);
    const activeSlide = document.querySelectorAll(`.${class2}`);
    let dots;
    let currentSlide = 0;
    let interval;
    const timeInterval = 2000;
    const portfolioDots = document.querySelector(`.${class4}`);
    if (!slides || !activeSlide || !sliderBlock || !portfolioDots) {return};
    
    const createDots = () => {
        for (let i = 0; i<slides.length; i++) {
            let dot = document.createElement('li');
            dot.classList.add(class5);
            if (i === 0) {
                dot.classList.add(class6);  
            }
            portfolioDots.append(dot);
        }
        dots = document.querySelectorAll(`.${class5}`);
        return dots;
    };

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };
    const autoSlide = () => {
        prevSlide(slides, currentSlide, class2);
        prevSlide(dots, currentSlide, class6);
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, class2);
        nextSlide(dots, currentSlide, class6);
    };
    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };
    const stopSlide = () => {
        clearInterval(interval);
    };
    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();
        if (!e.target.matches('.dot, .portfolio-btn')) {
            return
        }
        prevSlide(slides, currentSlide, class2);
        prevSlide(dots, currentSlide, class6);

        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.classList.contains(class5)) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            });
        }
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slides.length-1;
        }
        nextSlide(slides, currentSlide, class2);
        nextSlide(dots, currentSlide, class6);
    });
    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
    }, true);
    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval);
        }
    }, true);

    createDots();
    startSlide(timeInterval);
};
export default slider