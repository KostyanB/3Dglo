const smoothScroll = () => {
    const serviceBlock = document.getElementById('service-block');

    const handleScroll = (e, elem) => {
        e.preventDefault();
        elem.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    };

    const scrollToTop = e =>{
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollToSection = e => {
        const targetHref = e.target.href.split('#')[1];
        const targetElem = document.getElementById(targetHref);
        handleScroll(e, targetElem);

    };

    document.addEventListener('click', e => {
        e.target.closest('.scroll-button') && handleScroll(e, serviceBlock);
        e.target.classList.contains('to-top') && scrollToTop(e);
        e.target.classList.contains('to-section') && scrollToSection(e);
    });
};
export default smoothScroll;
