import scroll from './scroll';

export default function (...args) {
  const smallPic = document.querySelectorAll('.col-lg-3.col-md-4.col-sm-6.col-xs-12.text-center.wow.fadeIn img');
  const parrant = document.querySelector('.works .container .row');
  const gallary = document.createElement('div');
  const img = document.createElement('img');
  const works = document.querySelector('.works');
  gallary.classList.add('popup');

  works.append(gallary);
  gallary.append(img);
  gallary.style.alignItems = 'center';
  gallary.style.justifyContent = 'center';
  gallary.style.display = '';
  img.style.height = '550px';

  parrant.addEventListener('click', (e) => {
    if (e.target) {
      e.preventDefault();
    }
    const { target } = e;
    if (!Array.from(smallPic).includes(target)) { return; }
    const i = Array.from(smallPic).indexOf(target);
    gallary.style.display = 'flex';
    img.src = args[i];
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = `${scroll()}px`;
  });

  gallary.addEventListener('click', (e) => {
    const { target } = e;
    if (target !== img) {
      gallary.style.display = '';
      document.body.style.overflow = '';
      document.body.style.marginRight = '0px';
    }
  });
}
