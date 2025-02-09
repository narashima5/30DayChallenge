const like = document.querySelector('.imgContainer');
const count = document.querySelector('#count');


let timesClicked = 0;

like.addEventListener('dblclick', (e) => {
        createHeart();
    }
);

const createHeart = () => {
    const heart = document.querySelector('#like');
    heart.classList.add('heart')
    count.innerHTML = ++timesClicked;

    setTimeout(() => heart.classList.remove('heart'), 600);
};