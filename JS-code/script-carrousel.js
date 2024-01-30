const carrouselContainer = document.getElementById('carrousel-container');
const carrousel = document.getElementById('carrousel');
const buttonLeft = document.getElementById('button-projects-left');
const buttonRight = document.getElementById('button-projects-right');

const carrouselElements = document.getElementsByClassName('cards-projects');

const rootStyles = document.querySelector(':root');

const directionCarrousel = {
    right: 'right',
    left: 'left'
};

const getTransformValue = () => Number(getComputedStyle(document.getElementById('carrousel')).getPropertyValue('--carrousel-transform').replace('px', ''));

let counter = 0;
const reorderCarrousel = () => {
    if (counter === carrouselElements.length - 1) {
        carrousel.appendChild(carrousel.firstElementChild);
    }
}

const moveSlide = (direction) => {
    const transformValue = getTransformValue();
    if (direction === directionCarrousel.left) {
        rootStyles.style.setProperty('--carrousel-transform', `${transformValue + 300}px`);
        counter--;
    } else if (direction === directionCarrousel.right) {
        rootStyles.style.setProperty('--carrousel-transform', `${transformValue - 300}px`);
        counter++;
    };

    reorderCarrousel();
};

buttonRight.addEventListener('click', ()=>moveSlide(directionCarrousel.right));
buttonLeft.addEventListener('click', ()=>moveSlide(directionCarrousel.left));
