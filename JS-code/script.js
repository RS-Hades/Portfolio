const themeChecker = document.getElementById('checker');
const root = document.querySelector(':root');


themeChecker.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
  
    const getVar = document.getElementsByClassName('light-theme')
  
    if (getVar.length > 0) {
      root.style.setProperty('--tooltip-collapsed', 'rgb(11, 4, 12)');
      root.style.setProperty('--lines-and-tooltip', 'white');
      root.style.setProperty('--sidebar-hover', '#bababa');
      root.style.setProperty('--sidebar-background', 'rgb(250, 238, 253)');
      root.style.setProperty('--sidebar-text-color', 'rgb(11, 4, 12)');
      root.style.setProperty('--expand-button', 'rgb(11, 4, 12)');
      root.style.setProperty('--main-color', 'rgb(250, 238, 253)');
      root.style.setProperty('--complementary-color', 'black');
    } else {
      root.style.setProperty('--tooltip-collapsed', 'white');
      root.style.setProperty('--lines-and-tooltip', 'rgb(11, 4, 12)');
      root.style.setProperty('--sidebar-hover', '#353E47');
      root.style.setProperty('--sidebar-background', 'rgb(11, 4, 12)');
      root.style.setProperty('--sidebar-text-color', 'white');
      root.style.setProperty('--expand-button', 'white');
      root.style.setProperty('--main-color', 'rgb(11, 4, 12)');
      root.style.setProperty('--complementary-color', 'white');
    }
  });

