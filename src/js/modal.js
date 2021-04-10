export default function (modal, close, trigger, next = 0) {

    trigger.addEventListener(`click`, (e) => {
        if (e.target) {
            e.preventDefault();
        }
        modal.style.display = `block`;
        document.body.style.overflow = `hidden`;

    });

    close.addEventListener(`click`, (e) => {
        modal.style.display = `none`;
        document.body.style.overflow = ``;
    });
    if (next) {
        next.addEventListener(`click`, (e) => {
            modal.style.display = `none`;
            document.body.style.overflow = ``;
        });
    }


    modal.addEventListener(`click`, (e) => {
        if (e.target === modal) {
            modal.style.display = `none`;
            document.body.style.overflow = ``;
        }
    });


}