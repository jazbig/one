export default function () {
  const img = document.querySelectorAll('.big_img.text-center > img');
  const linksForImg = document.querySelectorAll('.balcon_icons_img');

  linksForImg.forEach((item, index) => {
    item.addEventListener('click', () => {
      img.forEach((i) => {
        i.classList.remove('visible');
      });
      img[index].classList.add('visible');
    });
  });
}
