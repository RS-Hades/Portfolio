const carrouselContainer = document.getElementById('carrousel-container');
const carrousel = document.getElementById('carrousel');
const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');

const direction = {
    right: 'right',
    left: 'left'
};

const moveSlide = (direction) => {
    if (direction === direction.left) {

    } else if (direction === direction.right) {
        
    }
}

buttonRight.addEventListener('click', ()=>moveSlide(direction.right));
buttonLeft.addEventListener('click', ()=>moveSlide(direction.left));