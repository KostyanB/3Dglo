'use strict'
import animate from './animate';
const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcSquare = document.querySelector('.calc-square'),
        calcCount = document.querySelector('.calc-count'),
        calcDay = document.querySelector('.calc-day'),
        totalValue = document.getElementById('total');
        let calcType = document.querySelector('.calc-type');

    const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;

        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }
        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }
        if (typeValue && squareValue) {
            total = Math.round(price * typeValue * squareValue * dayValue * countValue);
        }
        // анимация total
        const totalAnim = () => {
            animate( {
                duration: 2000,
                timing: (timeFraction) => {
                    return timeFraction;
                },
                draw: (progress) => {
                    totalValue.textContent = Math.round(total * progress);
                },
            });
        };
        totalAnim(total);
        if(total === 0) {
            calcSquare.value = '';
            calcCount.value = '';
            calcDay.value = '';
        }
    };
    calcBlock.addEventListener('change', (e) => {
        if (e.target.matches('select') || e.target.matches('input')) {
            countSum();
        }
    });
};
export default calc;