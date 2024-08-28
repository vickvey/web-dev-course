const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

const makeRandColor = () => {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);

    return `rgb(${R}, ${G}, ${B})`;
}

button.addEventListener('click', (evt) => {
    container.style.backgroundColor = makeRandColor();
    evt.stopPropagation();
});

container.addEventListener('click', (evt) => {
    container.classList.toggle('hide');
});