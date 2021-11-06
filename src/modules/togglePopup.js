import animate from './animate';

const togglePopup = () => {
    const popUp = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content');
    // анимация popup
    const popupAnim = () => {
        animate({
            duration: 500,
            timing: timeFraction => timeFraction,
            draw: progress => {
                const popupPosTop = popupContent.getBoundingClientRect().top,
                    clientHeight = document.documentElement.clientHeight,
                    stopPosTop = clientHeight / 10, //10% задано в CSS
                    startPosPop = -100,
                    posPopup = startPosPop + (stopPosTop - startPosPop) * progress;
                if (popupPosTop < stopPosTop) {
                    popupContent.style.transform = `translateY(${posPopup}%)`;
                }
            },
        });
    };

    popupBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            // popupContent по центру горизонтально
            const userWidth = document.documentElement.clientWidth;
            const popupContent = document.querySelector('.popup-content');
            const posLeft = (userWidth - 400) * 100 / (2 * userWidth);
            popupContent.style.left = `${posLeft}%`;
            // проверка ширины экрана
            if (userWidth > 768) {
                popUp.style.display = 'block';
                popupContent.style.transform = `translateY(-100%)`;
                popupAnim();
            } else {
                popUp.style.display = 'block';
            }
        });
    });

    popUp.addEventListener('click', e => {
        let target = e.target;

        if (target.classList.contains('popup-close')) {
            popUp.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popUp.style.display = 'none';
            }
        }
    });
};
export default togglePopup;
