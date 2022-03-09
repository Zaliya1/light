const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.querySelector('#timer-minutes');
    const timerSeconds = document.querySelector('#timer-seconds');
    
    const getTimeRemaining = () => {
        let dateShop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateShop- dateNow)/1000;
        let hours = Math.floor(timeRemaining/60 /60);
        let minutes = Math.floor((timeRemaining/60) %60);
        let seconds = Math.floor(timeRemaining % 60);

        return {timeRemaining, hours, minutes, seconds};
    };
    const updateClock = () => {
        let getTime = getTimeRemaining();
        if (getTime.timeRemaining > 0) {
            if (String(getTime.hours).length === 1) {
                timerHours.textContent = "0" + getTime.hours;
            } else {timerHours.textContent = getTime.hours;}
            if (String(getTime.minutes).length === 1) {
                timerMinutes.textContent = "0" + getTime.minutes;
            } else {timerMinutes.textContent = getTime.minutes;}
            if (String(getTime.seconds).length === 1) {
                timerSeconds.textContent = "0" + getTime.seconds;
            } else {timerSeconds.textContent = getTime.seconds;}
            // timerMinutes.textContent = getTime.minutes;
            // timerSeconds.textContent = getTime.seconds;
        }
        else if (getTime.timeRemaining <= 0) {
            clearInterval(idInterval);
            timerHours.textContent = "00";
            timerMinutes.textContent = "00";
            timerSeconds.textContent = "00";
        }
        
    };
    updateClock();
    let idInterval = setInterval(updateClock, 1000);
};
export default timer;