const btn2 = document.querySelector('#v2');

btn2.onmouseenter = () => {
    const newPara = document.createElement('p');
    newPara.innerText = 'DONT CLICK THE BUTTONNN !!';
    document.body.appendChild(newPara);
}

btn2.onclick = () => {
    // alert('I TOLD YOU NOT TO CLICKKK !!!!!!');
    const img = document.createElement('img');
    img.src='https://media1.tenor.com/m/9ajZkvVxdS8AAAAC/akshay-kumar-rakh-teri-maa-ki-rakh.gif';
    img.alt='PHIR HERA PHERI MEME BABU BHAIYA!'
    document.body.appendChild(img);
}

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!');
}

const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', () => {
    alert('CLICKED!!');
});