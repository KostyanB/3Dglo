'use strict'
import animate from './animate';
const toggleMenu = () => {
    const menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn');
    // анимация Menu
    const menuAnim = () => {
        animate( {
            duration: 400,
            timing: (timeFraction) => {
                return timeFraction;
            },
            draw: (progress) => {
                const startMenu = -100,
                    stopMenu = 100,
                    posMenu = startMenu + (stopMenu - startMenu) * progress;
                menu.style.transform = `translate(${posMenu}%)`;
            },
        });
    };

    document.addEventListener('click', (e) => {
        let target = e.target;
        if (target.closest('.menu')) {
            let userWidth = document.documentElement.clientWidth;
            if (userWidth > 768) {
                menuAnim();
            } else if (!menu.style.transform || menu.style.transform === `translate(-100%)`) { //его нет или уже есть
                menu.style.transform = `translate(100%)`;
            }
        } else if (target.closest('a') || !target.closest('menu')) {
            menu.style.transform = `translate(-100%)`;
        }
    });
    closeBtn.addEventListener('click', (e) => e.preventDefault());
};
export default toggleMenu;