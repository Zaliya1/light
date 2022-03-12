const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const activeMenu = document.querySelector('menu');
    const closeBtn = document.querySelector('.close-btn');
    const links = document.querySelectorAll('li > a');
    const btn = document.querySelectorAll('a')[0];

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    menuBtn.addEventListener('click', handleMenu);
    activeMenu.addEventListener('click', (e) => {
        if (e.target.classList.contains('.close-btn') || e.target.matches('a')) {
            handleMenu();
        }
    });
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
    });
    links.forEach(link => link.addEventListener('click', (e) => {
        e.preventDefault();
    }));
    btn.addEventListener('click', (e) => {
        e.preventDefault();
    });
};
export default menu;