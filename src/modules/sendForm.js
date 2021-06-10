'use strict'
const sendForm = (form, inputs, statusMessage) => {
    const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с Вами свяжемся',
        loadColor = '#19b5fe', errorColor = '#fe193f', successColor = '#19fe52';

    //создание базы данных
    const formData = new FormData(form);
        let body = {};
        formData.forEach((item, key) => {
            body[key] = item;
        });
    // clear inputs
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
            item.removeAttribute('style');
        });
    };
    const showResult = (color, message, error) => {
        statusMessage.style.color = color;
        statusMessage.textContent = message;
        if (error) {
            console.error(error);
        }
    };
    const clearMessage = () => statusMessage.textContent = '';
    const postData = (body) => {
        showResult(loadColor, loadMessage);
        return fetch('server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
    };
    postData(body)
        .then((response) => {
            if(response.status !== 200) {
                throw new Error('Status network not 200');
            }
            showResult(successColor, successMessage);
            clearInputs();
            setTimeout(clearMessage, 3000);
        })
        .catch((error) => {
            showResult(errorColor, errorMessage, error);
            setTimeout(clearMessage, 3000);
        });
};
export default sendForm;