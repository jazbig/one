export default function () {
    const timerSec = document.querySelector(`#seconds`),
    timerMin = document.querySelector(`#minutes`),
    timerHours = document.querySelector(`#hours`),
    timerDays = document.querySelector(`#days`);
    
    const targetDate = new Date(2021, 3, 9);
    
    let timerId = setTimeout(function tick() {
        let date = new Date();
        let sec = Math.trunc((targetDate - date)/1000) - Math.trunc((targetDate - date)/1000/60)*60;
        let min = Math.trunc((targetDate - date)/1000/60) - Math.trunc((targetDate - date)/1000/60/60)*60;
        let hours = Math.trunc((targetDate - date)/1000/60/60) - Math.trunc((targetDate - date)/1000/60/60/24)*24;
        let days = Math.trunc((targetDate - date)/1000/60/60/24);
        timerSec.textContent = sec;
        timerMin.textContent = min;
        timerHours.textContent = hours;
        timerDays.textContent = days;
        timerId = setTimeout(tick, 500);
      }, 500);
   
}