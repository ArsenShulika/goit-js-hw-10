'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delayInput = form.elements.delay.value;
  const delay = Number(delayInput);
  const state = form.elements.state.value;

  console.log(state);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(resolvedDelay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${resolvedDelay}ms`,
        position: 'topRight',
      });
    })
    .catch(rejectedDelay => {
      iziToast.error({
        message: `❌ Rejected promise in ${rejectedDelay}ms`,
        position: 'topRight',
      });
    });
});
