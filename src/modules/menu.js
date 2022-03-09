const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const activeMenu = document.querySelector('menu');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    menuBtn.addEventListener('click', handleMenu);
    activeMenu.addEventListener('click', (e) => {
        if (e.target.classList.contains('.close-btn') || e.target.matches('a')) {
            handleMenu();
        }
    });
};
export default menu;