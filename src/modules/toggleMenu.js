const toggleMenu = () => {
    const menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn');

    document.addEventListener('click', e => {
        if (e.target.closest('.menu')) {
            menu.classList.add('active-menu');
        } else if (e.target.closest('a') || !e.target.closest('menu')) {
            menu.classList.remove('active-menu');
        }

        if (e.target === closeBtn) e.preventDefault();
    });
};
export default toggleMenu;