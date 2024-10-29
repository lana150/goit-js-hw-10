import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputEl = document.querySelector('input[type=number]');
const formField = document.querySelector('.form');

formField.addEventListener('submit', event => {
  event.preventDefault();
  onButtonClickSubmit();
});

function onButtonClickSubmit() {
  const inputValue = inputEl.value;

  const selectedRadio = document.querySelector('input[name="state"]:checked');

  const selectedState = selectedRadio.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedState === 'fulfilled') {
        resolve(inputValue);
      } else {
        reject(inputValue);
      }
    }, inputValue);
  });

  promise
    .then(delay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topCenter',
        icon: false,
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topCenter',
        icon: false,
      });
    });

  inputEl.value = '';
}