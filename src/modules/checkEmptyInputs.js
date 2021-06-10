'use strict'
import sendForm from './sendForm';
const checkEmptyInputs = () => {
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 1.2em';
    const upsMessage = 'Необходимо заполнить все поля';
    const checkForm = (targetForm) => {
        const inputs = targetForm.querySelectorAll('input');
        const checkArr = [];
        inputs.forEach(item => {
            if(item.value !== '') {
                checkArr.push(true);
            } else {
                checkArr.push(false);
            }
        });
        if (checkArr.every(item => item)) {
            statusMessage.textContent = '';
            sendForm(targetForm, inputs, statusMessage);
        } else {
            statusMessage.style.color = '#fe193f';
            statusMessage.textContent = upsMessage;
            setTimeout(() => statusMessage.textContent = '', 3000);
        }
    };

    document.body.addEventListener('submit', (e) => {
        e.preventDefault();
        const targetForm = e.target;
        if(targetForm) {
            targetForm.appendChild(statusMessage);
            checkForm(targetForm);
        }
    });
};
export default checkEmptyInputs;