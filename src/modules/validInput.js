'use strict'
const validInput = () => {
    const correctBase = {
        correctName: true,
        correctMail: true,
        correctTel: true,
        correctMess: true,
    };
    document.body.addEventListener('change', (e) => {
        // Показ некорректного ввода и блок submit
        const showError = (error) => {
            const selectForm = e.target.closest('form');
            if (selectForm) {
                const submitBtn = selectForm.querySelector('.form-btn');
                //подсветка ошибок
                if (error) {
                    e.target.style.border = '3px solid #fe193f';
                } else {
                    e.target.style.border = '3px solid #19fe52';
                }
                // сводная проверка всех полей
                if (Object.values(correctBase).every(item => item)) {
                    submitBtn.removeAttribute('disabled');
                } else {
                    submitBtn.setAttribute('disabled', 'true');
                }
            }
        };

        // Корректировка пробелов др. знаков в поле Ваше сообщение
        if (e.target.name === 'user_message') {
            const changeSymbol = [' ', '-', ',', ';', ':', '.'],
                changeReg = [/\s+/gm, /-+/gm, /,+/gm, /;+/gm, /:+/gm, /\.+/gm];
            changeSymbol.forEach((item, i) => {
                e.target.value = e.target.value.replace(changeReg[i], item);
            });
            if (e.target.value === ' ') {
                e.target.value = '';
                correctBase.correctMess = false;
                showError(true);
            } else {
                correctBase.correctMess = true;
                showError(false);
            }
        }
        // Корректировка ФИО
        if (e.target.name === 'user_name') {
            e.target.value = e.target.value.replace(/\s+/g, ' ');
            let nameData = e.target.value.trim().split(' '),
                userName = '';
            nameData.forEach(item => {
                userName += `${item.charAt(0).toUpperCase() + item.substring(1)} `;
            });
            if (userName === ' ') { //если только пробелы - value ''
                e.target.value = '';
                correctBase.correctName = false;
                showError(true);
            } else if (userName.length < 3) {
                e.target.value = userName;
                correctBase.correctName = false;
                showError(true);
            } else {
                e.target.value = userName;
                correctBase.correctName = true;
                showError(false);
            }
        }
        // Валидация e-mail
        if (e.target.name === 'user_email') {
            const correctMail = /^[\w\-\.\!\~\*\']+@[\w\-\.\!\~\*\']+(\.[a-z]{2,})$/;
            if (!(correctMail.test(e.target.value))) {
                //e.target.value = '';
                correctBase.correctMail = false;
                showError(true);
            } else {
                correctBase.correctMail = true;
                showError(false);
            }
        }
        // валидация телефона
        if (e.target.name === 'user_phone') {
            e.target.value = e.target.value.replace(/^\+\d{1}\s/g, '+7 ');
            // проверка на количество цифр
            const corrNum = e.target.value.replace(/[\s\+\(\)-]*/g, '');
            if (corrNum.length < 11) {
                correctBase.correctTel = false;
                showError(true);
            } else {
                correctBase.correctTel = true;
                showError(false);
            }
        }
    });
};
export default validInput;