const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
        tab = tabHeader.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');
    tabContent[1].classList.add('d-none');
    tabContent[2].classList.add('d-none');

    const toggleTabContent = index => {
        for (let i = 0; i < tabContent.length; i++) {
            if (index === i) {
                tab[i].classList.add('active');
                tabContent[i].classList.remove('d-none');
            } else {
                tab[i].classList.remove('active');
                tabContent[i].classList.add('d-none');
            }
        }
    };

    tabHeader.addEventListener('click', e => {
        let target = e.target;
        target = target.closest('.service-header-tab'); //проверяет селектор и выше по дереву, null если нет
        if (target) { //есть ли в target что-нибудь
            tab.forEach((item, i) => {
                if (item === target) {
                    toggleTabContent(i);
                }
            });
        }
    });
};
export default tabs;