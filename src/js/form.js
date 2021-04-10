import {
    post
} from "jquery";

export default function () {
    const forms = document.querySelectorAll(`form`);
    const phoneInput = document.querySelectorAll(`input[name="user_phone"]`),
        nextCalc = document.querySelector(`.popup_calc_button`),
        widthCalc = document.querySelector(`#width`),
        heightCalc = document.querySelector(`#height`),
        next2Calc = document.querySelector(`.popup_calc_profile_button`),
        viewCalc = document.querySelector(`#view_type`),
        coldCalc = document.querySelector(`#cold`),
        warmCalc = document.querySelector(`#warm`),
        img = document.querySelectorAll(`.big_img.text-center > img`);
    let obj = {};

    nextCalc.addEventListener(`click`, () => {
        obj.width = widthCalc.value;
        obj.height = heightCalc.value;
        img.forEach((item, index) => {
            if (item.classList.contains(`visible`)) {
                obj.img = index+1;
            }
        });
    });

    next2Calc.addEventListener(`click`, () => {
        obj.view = viewCalc.value;
        obj.cold = coldCalc.previousSibling.previousSibling.checked;
        obj.warm = warmCalc.previousSibling.previousSibling.checked;
    });



    phoneInput.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });


    forms.forEach(item => {
        item.addEventListener(`submit`, (e) => {
            e.preventDefault();
            const formData = new FormData(item);

            formData.forEach((value, key) => obj[key] = value);
            fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: `POST`,
                    body: JSON.stringify(obj),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(json => console.log(json))
                .then(obj = {})
                .finally(item.reset());

        });
    });





}