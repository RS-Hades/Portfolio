const expand_btn = document.getElementById("first-expand-button");

let activeIndex;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidebar-links a");

allLinks.forEach((elem) => {
  elem.addEventListener("click", function () {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});

const buttonSmallerSizes = document.getElementById('expand-button-small');
buttonSmallerSizes.addEventListener('click', () => {
  document.body.classList.toggle('small-sizes')
})

const buttonSmallerSizes2 = document.getElementById('second-expand-button');
buttonSmallerSizes2.addEventListener('click', () => {
  document.body.classList.toggle('small-sizes')
  document.body.classList.toggle("collapsed");
})