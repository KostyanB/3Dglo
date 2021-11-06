const ourTeam = () => {
    const command = document.querySelector('.command');
    let newPhoto, oldPhoto;

    command.addEventListener('mouseover', e => {
        newPhoto = e.target.dataset.img;
        oldPhoto = e.target.getAttribute('src');
        if (e.target.classList.contains('command__photo')) {
            e.target.src = newPhoto;
        }
    });
    command.addEventListener('mouseout', e => {
        if (e.target.classList.contains('command__photo')) {
            e.target.src = oldPhoto;
        }
    });
};
export default ourTeam;
