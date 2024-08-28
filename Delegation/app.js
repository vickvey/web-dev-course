const form = document.querySelector('form');
const list = document.querySelector('#tweetList');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const username = document.querySelector('#username').value;
    const tweet = document.querySelector('#tweet').value;

    const newLi = document.createElement('LI');
    newLi.innerHTML = `<b>${username}</b>: ${tweet}`;
    list.append(newLi);

    document.querySelector('#username').value = '';
    document.querySelector('#tweet').value = '';
});

list.addEventListener('click', function(evt) {
    console.log('CLICK ON UL!');
    console.log(evt);

    evt.target.nodeName === 'LI' && evt.target.remove();
});