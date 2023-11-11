/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};

showMenu('nav__toggle', 'nav__menu');

/*===== REMOVE MENU =====*/

/*===== SCROLL SECTIONS ACTIVE LINK =====*/

/*===== CHANGE COLOR HEADER =====*/
