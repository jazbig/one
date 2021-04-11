import scroll from './scroll';

export default function (modal, close, trigger, next = 0) {
  trigger.addEventListener('click', (e) => {
    if (e.target) {
      e.preventDefault();
    }
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = `${scroll()}px`;
  });

  close.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.marginRight = '0px';
  });
  if (next) {
    next.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = '0px';
    }
  });
}
