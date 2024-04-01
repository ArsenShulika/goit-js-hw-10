'use strict';

import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

const inputText = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;

const setDays = document.querySelector('[data-days]');
const setHours = document.querySelector('[data-hours]');
const setMinutes = document.querySelector('[data-minutes]');
const setSeconds = document.querySelector('[data-seconds]');

let timerInterval;
let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (userSelectedDate === null) {
      return;
    } else {
      userSelectedDate = selectedDates[0];
      if (userSelectedDate < new Date()) {
        iziToast.error({
          title: 'Error',
          position: 'topRight',
          message: 'Please choose a date in the future',
        });
        startBtn.disabled = true;
      } else {
        startBtn.disabled = false;
      }
    }
  },
};

flatpickr(inputText, options);

function updateTimer() {
  const timeDiff = userSelectedDate - Date.now();

  if (timeDiff <= 0) {
    clearInterval(timerInterval);
    inputText.disabled = false;
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timeDiff);

  setDays.textContent = days.toString().padStart(2, '0');
  setHours.textContent = hours.toString().padStart(2, '0');
  setMinutes.textContent = minutes.toString().padStart(2, '0');
  setSeconds.textContent = seconds.toString().padStart(2, '0');
}

startBtn.addEventListener('click', () => {
  inputText.disabled = true;
  startBtn.disabled = true;
  timerInterval = setInterval(updateTimer, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// const date1 = new Date();
// console.log(date1);

//метод getTime() повертає в мілісекундах
// const date = new Date();
// console.log(date.getTime());

//метод Date.now() повертає в мілісекундах
// const time = Date.now();
// console.log(time);
