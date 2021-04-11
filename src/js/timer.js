export default function () {
  const timerSec = document.querySelector('#seconds');
  const timerMin = document.querySelector('#minutes');
  const timerHours = document.querySelector('#hours');
  const timerDays = document.querySelector('#days');

  const targetDate = new Date(2021, 3, 9);

  setTimeout(function tick() {
    const date = new Date();
    const sec = Math.trunc((targetDate - date) / 1000) - Math.trunc((
      targetDate - date) / 1000 / 60) * 60;
    const min = Math.trunc((targetDate - date) / 1000 / 60) - Math.trunc((
      targetDate - date) / 1000 / 60 / 60) * 60;
    const hours = Math.trunc((targetDate - date) / 1000 / 60 / 60) - Math.trunc((
      targetDate - date) / 1000 / 60 / 60 / 24) * 24;
    const days = Math.trunc((targetDate - date) / 1000 / 60 / 60 / 24);
    timerSec.textContent = sec;
    timerMin.textContent = min;
    timerHours.textContent = hours;
    timerDays.textContent = days;
    setTimeout(tick, 500);
  }, 500);
}
