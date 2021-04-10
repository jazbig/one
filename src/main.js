import './assets/css/animate.min.css';
import './assets/css/style.css';
import './assets/css/bootstrap.css';
import html from './temple.html';
import modalPop from './js/modal';
import tabs from './js/tabs';
import form from './js/form';
import calck from './js/calck';
import timer from './js/timer'; 
import gallary from './js/gallary'; 
import img1 from './assets/img/our_works/big_img/1.png';
import img2 from './assets/img/our_works/big_img/2.png';
import img3 from './assets/img/our_works/big_img/3.png';
import img4 from './assets/img/our_works/big_img/4.png';
import img5 from './assets/img/our_works/big_img/5.png';
import img6 from './assets/img/our_works/big_img/6.png';
import img7 from './assets/img/our_works/big_img/7.png';
import img8 from './assets/img/our_works/big_img/8.png';



document.body.innerHTML = html;

const callBack = document.querySelector(`.popup_engineer_btn`),
    popup = document.querySelector(`.popup_engineer`),
    closePopup = document.querySelectorAll(`.popup_close`),
    phoneLink = document.querySelector(`.phone_link`),
    phonePopup = document.querySelector(`.popup`),
    windowCalc = document.querySelector(`.popup_calc`),
    buttonCalc = document.querySelectorAll(`.popup_calc_btn`),
    closeCalc = document.querySelector(`.popup_calc_close`),
    nextCalc = document.querySelector(`.popup_calc_button`),
    Window2Calc = document.querySelector(`.popup_calc_profile`),
    Window2CalcClose = document.querySelector(`.popup_calc_profile_close`),
    Window3Calc = document.querySelector(`.popup_calc_end`),
    Window3CalcClose = document.querySelector(`.popup_calc_end_close`),
    next2Calc = document.querySelector(`.popup_calc_profile_button`);

modalPop(popup, closePopup[1], callBack);
modalPop(phonePopup, closePopup[0], phoneLink);
buttonCalc.forEach(item => {
    modalPop(windowCalc, closeCalc, item, nextCalc);
});
modalPop(Window2Calc, Window2CalcClose, nextCalc, next2Calc);
modalPop(Window3Calc, Window3CalcClose, next2Calc);

tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');

form();

calck();

timer();

gallary(img1, img2, img3, img4, img5, img6, img7, img8);

