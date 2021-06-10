'use strict'
import maskPhone from './maskPhone';
const maskInput = () => {
    document.body.addEventListener('input', (e) => {
        // числовые input
        if (e.target.placeholder === 'Общая площадь*' || e.target.placeholder === 'Количество помещений' || e.target.placeholder === 'Срок исполнения (в днях)') {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        }
        // Ваше имя
        if (e.target.name === 'user_name') {
            e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ-\s]/g, '');
        }
        // Ваше сообщение
        if (e.target.name === 'user_message') {
            e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ0-9\.\s\-_,:;]/gm, '');
        }
        // e-mail
        if (e.target.name === 'user_email') {
            e.target.setAttribute('type', 'text');
            e.target.value = e.target.value.replace(/[^\w-@\.\!\~\*\'\$]/g, '');
        }
        // Номер телефона
        if (e.target.name === 'user_phone') {
            e.target.setAttribute('type', 'text');
            maskPhone('.form-phone');
        }
    });
};
export default maskInput;