document.addEventListener('DOMContentLoaded', function () {

    AOS.init();

    const menu = document.getElementById("menu");
    const footer = document.getElementById("footer");
    const alturaMenu = menu.clientHeight;

    footer.innerHTML = `Vitor R.S. &copy; - ` + getYear();

    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaMenu - 100) {
            ocultagoUp();
        } else {
            exibegoUp();
        }
    });

    Array.from(document.getElementsByClassName("menu__items__item"))
        .forEach((item, index) => {
            item.onmouseover = () => {
                menu.dataset.activeIndex = index;
            }
        });

});

function ocultagoUp() {
    const goUp = document.querySelector('.goUp');
    goUp.classList.add('goUp--is-hidden');
};

function exibegoUp() {
    const goUp = document.querySelector('.goUp');
    goUp.classList.remove('goUp--is-hidden');
};

function getYear() {
    let date = new Date();
    let n = date.getYear() + 1900;
    return n
};