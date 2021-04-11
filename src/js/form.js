export default function () {
  const forms = document.querySelectorAll('form');
  const phoneInput = document.querySelectorAll('input[name="user_phone"]');
  const nextCalc = document.querySelector('.popup_calc_button');
  const widthCalc = document.querySelector('#width');
  const heightCalc = document.querySelector('#height');
  const next2Calc = document.querySelector('.popup_calc_profile_button');
  const viewCalc = document.querySelector('#view_type');
  const coldCalc = document.querySelector('#cold');
  const warmCalc = document.querySelector('#warm');
  const img = document.querySelectorAll('.big_img.text-center > img');
  let obj = {};

  nextCalc.addEventListener('click', () => {
    obj.width = widthCalc.value;
    obj.height = heightCalc.value;
    img.forEach((item, index) => {
      if (item.classList.contains('visible')) {
        obj.img = index + 1;
      }
    });
  });

  next2Calc.addEventListener('click', () => {
    obj.view = viewCalc.value;
    obj.cold = coldCalc.previousSibling.previousSibling.checked;
    obj.warm = warmCalc.previousSibling.previousSibling.checked;
  });

  phoneInput.forEach((item) => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });
  });

  forms.forEach((item) => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(item);

      formData.forEach((value, key) => obj[key] = value);
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .then(obj = {})
        .finally(item.reset());
    });
  });
}
