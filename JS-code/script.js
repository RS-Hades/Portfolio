const themeChecker = document.getElementById('checker');
const root = document.querySelector(':root');


themeChecker.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
  
    const getVar = document.getElementsByClassName('light-theme')
  
    if (getVar.length > 0) {
      root.style.setProperty('--main-color', 'rgb(250, 238, 253)');
      root.style.setProperty('--sidebar-background', 'rgb(250, 238, 253)');
      root.style.setProperty('--complementary-color', 'black');
      root.style.setProperty('--sidebar-main-color', 'black');
      root.style.setProperty('--text-link', '#525252');
      root.style.setProperty('--expand-button', '#cecece');
    } else {
      root.style.setProperty('--main-color', 'rgb(11, 4, 12)');
      root.style.setProperty('--sidebar-background', 'rgb(11, 4, 12)');
      root.style.setProperty('--complementary-color', 'white');
      root.style.setProperty('--sidebar-main-color', 'white');
      root.style.setProperty('--text-link', 'white');
      root.style.setProperty('--expand-button', '#353E47');
    }
  });

