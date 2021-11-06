const slider = () => {
    const slider = document.querySelector('.portfolio-content'),
        slide = document.querySelectorAll('.portfolio-item'),
        dots = document.querySelector('.portfolio-dots');

    const addDot = () => {
        const newDot = document.createElement('li');
        newDot.classList.add('dot');
        slide.forEach((item, i) => {
            item[i] = newDot.cloneNode(true);
            dots.append(item[i]);
        });
        const dot = document.querySelectorAll('.dot');
        dot[0].classList.add('dot-active');
    };
    addDot();
    const dot = document.querySelectorAll('.dot');
    let currentSlide = 0,
        interval; // переменная для стопа

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };

    const timeSlider = 3000;
    const startSlide = (time = 1500) => {
        interval = setInterval(autoPlaySlide, time);
    };
    startSlide(timeSlider);

    const stopSlide = () => { // останов при наведении на стрелки/точки
        clearInterval(interval);
    };

    slider.addEventListener('click', e => {
        e.preventDefault(); //откл ссылки-заглушки по умолчанию
        const target = e.target;
        //ограгичили клик по неселекторам
        if (!target.matches('.portfolio-btn, .dot')) return;

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if (target.matches('#arrow-right')) {
            currentSlide++;
        } else if (target.matches('#arrow-left')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            dot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide < 0) {
            currentSlide = slide.length - 1; //обнуляем
        } else if (currentSlide >= slide.length) {
            currentSlide = 0;
        }

        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', e => {
        if (e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {
            stopSlide();
        }
    });
    slider.addEventListener('mouseout', e => {
        if (e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {
            startSlide(timeSlider);
        }
    });
};
export default slider;
