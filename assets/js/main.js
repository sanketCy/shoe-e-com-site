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
const navLinks = document.querySelectorAll('.nav__link');
const navMenu = document.getElementById('nav__menu');

navLinks.forEach((navLink) => navLink.addEventListener('click', linkAction));

function linkAction() {
  navMenu.classList.remove('show');
}

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  console.log(scrollY);

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    console.log(sectionHeight, sectionTop);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*= ${sectionId}]`)
        .classList.add('active');
    } else {
      document
        .querySelector(`.nav__menu a[href*= ${sectionId}]`)
        .classList.remove('active');
    }
  });
}

/*===== CHANGE COLOR HEADER =====*/
window.onscroll = () => {
  const nav = document.querySelector('header');
  if (this.scrollY >= 200) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
};
