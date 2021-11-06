const validInput = () => {
    const correctBase = {
        correctName: true,
        correctMail: true,
        correctTel: true,
        correctMessage: true,
    };

    // Показ некорректного ввода и блок submit
    const showError = (error, elem) =>{
        const selectForm = elem.closest('form');

        if (selectForm) {
            const submitBtn = selectForm.querySelector('.form-btn');
            //подсветка ошибок
            if (error) {
                elem.style.border = '3px solid #fe193f';
            } else {
                elem.style.border = '3px solid #19fe52';
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
    const correctMessageField = target => {
        const changeSymbol = [' ', '-', ',', ';', ':', '.'],
            changeReg = [/\s+/gm, /-+/gm, /,+/gm, /;+/gm, /:+/gm, /\.+/gm];

        changeSymbol.forEach((item, i) => {
            target.value = target.value.replace(changeReg[i], item);
        });

        if (target.value === ' ') {
            target.value = '';
            correctBase.correctMessage = false;
            showError(true, target);
        } else {
            correctBase.correctMessage = true;
            showError(false, target);
        }
    };

    // Корректировка ФИО
    const correctNamesField = target => {
        target.value = target.value.replace(/\s+/g, ' ');
        const nameData = target.value.trim().split(' ');
        let userName = '';

        nameData.forEach(item => {
            userName += `${item.charAt(0).toUpperCase() + item.substring(1)} `;
        });

        if (userName === ' ') { //если только пробелы - value ''
            target.value = '';
            correctBase.correctName = false;
            showError(true, target);
        } else if (userName.length < 3) {
            target.value = userName;
            correctBase.correctName = false;
            showError(true, target);
        } else {
            target.value = userName;
            correctBase.correctName = true;
            showError(false, target);
        }
    };

    // Валидация e-mail
    const correctEmailField = target => {
        const correctMail = /^[\w\-\.\!\~\*\']+@[\w\-\.\!\~\*\']+(\.[a-z]{2,})$/;

        if (!(correctMail.test(target.value))) {
            correctBase.correctMail = false;
            showError(true, target);
        } else {
            correctBase.correctMail = true;
            showError(false, target);
        }
    };

    // валидация телефона
    const correctTelField = target => {
        target.value = target.value.replace(/^\+\d{1}\s/g, '+7 ');
        // проверка на количество цифр
        const corrNum = target.value.replace(/[\s\+\(\)-]*/g, '');
        if (corrNum.length < 11) {
            correctBase.correctTel = false;
            showError(true, target);
        } else {
            correctBase.correctTel = true;
            showError(false, target);
        }
    };

    document.body.addEventListener('change', e => {
        const target = e.target;

        if (target.name === 'user_message') correctMessageField(target);
        if (target.name === 'user_name') correctNamesField(target);
        if (target.name === 'user_email') correctEmailField(target);
        if (target.name === 'user_phone') correctTelField(target);
    });
};
export default validInput;
