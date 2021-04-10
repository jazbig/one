export default function (...args) {

    const smallPic = document.querySelectorAll(`.col-lg-3.col-md-4.col-sm-6.col-xs-12.text-center.wow.fadeIn img`);
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
    img.style.height = `550px`;

    parrant.addEventListener('click', (e) =>{
        if (e.target) {
            e.preventDefault();
        }
        let target = e.target;
        if (!Array.from(smallPic).includes(target)) {return;}
        let i = Array.from(smallPic).indexOf(target);
        gallary.style.display = 'flex';
        img.src = args[i];
        document.body.style.overflow = `hidden`;
    });

    gallary.addEventListener('click', (e) => {
        let target = e.target;
        if (target != img) {
            gallary.style.display = '';  
            document.body.style.overflow = ``;
        }
    });
    

}