const expand_btn = document.getElementById("first-expand-button");

let activeIndex;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const buttonSmallerSizes = document.getElementById('expand-button-small');
buttonSmallerSizes.addEventListener('click', () => {
  document.body.classList.toggle('small-sizes');
  document.body.classList.toggle("collapsed");
})

const buttonSmallerSizes2 = document.getElementById('second-expand-button');
buttonSmallerSizes2.addEventListener('click', () => {
  document.body.classList.toggle('small-sizes');
  document.body.classList.toggle("collapsed");
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const getClass = document.getElementsByClassName("collapsed");
const firstTooltip = document.getElementById('tooltip1');
const secondTooltip = document.getElementById('tooltip2');
const thirdTooltip = document.getElementById('tooltip3');
const fourthTooltip = document.getElementById('tooltip4');

firstTooltip.addEventListener("click", () => {
  if (getClass.length === 0) {  
    document.body.classList.toggle("collapsed");
    document.body.classList.toggle('small-sizes');
  }
});
secondTooltip.addEventListener("click", () => {
  if (getClass.length === 0) {  
    document.body.classList.toggle("collapsed");
    document.body.classList.toggle('small-sizes');
  }
});
thirdTooltip.addEventListener("click", () => {
  if (getClass.length === 0) {  
    document.body.classList.toggle("collapsed");
    document.body.classList.toggle('small-sizes');
  }
});
fourthTooltip.addEventListener("click", () => {
  if (getClass.length === 0) {  
    document.body.classList.toggle("collapsed");
    document.body.classList.toggle('small-sizes');
  }
});