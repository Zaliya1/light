const calculate = () => {
    const inputSquare = document.querySelector('.calc-square');
    const inputCount = document.querySelector('.calc-count');
    const inputDay= document.querySelector('.calc-day');
    inputSquare.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, '');
    });
    inputCount.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, '');
    });
    inputDay.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, '');
    });
};
export default calculate;