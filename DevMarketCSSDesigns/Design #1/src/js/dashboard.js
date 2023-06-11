const { ToggleTheme } = require("./themeHandler");

/*===== EXPANDER MENU  =====*/ 
const showMenu = (toggleId, navbarId, bodyId)=>{
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)
  
    if(toggle && navbar){
      toggle.addEventListener('click', ()=>{
        navbar.classList.toggle('expander')
  
        bodypadding.classList.toggle('body-pd')
      })
    }
};
showMenu('nav-toggle','navbar','body-pd');

/*===== Theme Handler  =====*/ 
const addThemeListener = (toggleId) => {
  const toggle = document.getElementById(toggleId);

  if (toggle) {
    toggle.addEventListener('click', ()=>{
      ToggleTheme();
    })
  }
}

addThemeListener("s");