const modal = () => {
    const tabContents = document.querySelectorAll('.service-tab');
    const tabs = document.querySelectorAll('.service-header-tab')
    const tabPanel = document.querySelector('.service-header');
   
    tabPanel.addEventListener('click', (e) => {
        if (e.target.closest('.service-header-tab')) {
            const tabsBtn = e.target.closest('.service-header-tab');
            tabs.forEach((tab, index) => {
                if (tab === tabsBtn) {
                    tab.classList.add('active');
                    tabContents[index].classList.remove('d-none')
                } else {
                    tab.classList.remove('active');
                    tabContents[index].classList.add('d-none')
                }
            });
        }
    });
};
export default modal;