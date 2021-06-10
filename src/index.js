'use strict';
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import ourTeam from './modules/ourTeam';
import maskInput from './modules/maskInput';
import validInput from './modules/validInput';
import calc from './modules/calc';
import checkEmptyInputs from './modules/checkEmptyInputs';
import SliderCarousel from './modules/sliderCarousel';

// Timer
countTimer('30 june 2021'); // аргументом передать дату окончания акции
// Меню
toggleMenu();
//popup
togglePopup();
// табы
tabs();
// Слайдер
slider();
// наша команда
ourTeam();
// Блокировка ввода "не тех" символов в input
maskInput();
// Валидация и корректировка текстовых input
validInput();
// Калькулятор
calc(100);
// проверка пустых форм
checkEmptyInputs();
// карусель
const carousel = new SliderCarousel({
    main: '.companies-wrapper',
    wrap: '.companies-hor',
    infinity: true,
    slidesToShow: 4,
    responsive: [{
        breakpoint: 1024,
        slidesToShow: 3,
    },
    {
        breakpoint: 768,
        slidesToShow: 2,
    },
    {
        breakpoint: 576,
        slidesToShow: 1,
    }
    ],
});
carousel.init();