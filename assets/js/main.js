

document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

  // Verificar se navToggle existe antes de adicionar o event listener
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  // Verificar se navClose existe antes de adicionar o event listener
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
});

// Selecionar todos os links do menu de navegação
const navLink = document.querySelectorAll(".nav__link");

// Função para fechar o menu ao clicar em um link
function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  // Remover a classe que exibe o menu
  navMenu.classList.remove("show-menu");
}

// Adicionar event listener a cada link para fechar o menu ao ser clicado
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Função para adicionar/remover a classe do header ao rolar a página
function scrollHeader() {
  const header = document.getElementById("header");

  if (window.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

// Adicionar event listener ao scroll da página para ativar a função scrollHeader
window.addEventListener("scroll", scrollHeader);

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (window.scrollY >= 200) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

// Adiciona o event listener para a rolagem da página
window.addEventListener("scroll", scrollUp);

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(".home__header, .section__title", { delay: 600 });
sr.reveal(".home__footer", { delay: 700 });
sr.reveal(".home__img", { delay: 900, origin: "top" }); // Corrigido de reavel para reveal
sr.reveal(
  ".sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy",
  { origin: "top", interval: 100 }
);
sr.reveal(".specs__data, .discount__animate", {
  origin: "left",
  interval: 100,
});
sr.reveal(".specs__img, .discount__img", { origin: "right" });
sr.reveal(".case__img", { origin: "top" });
sr.reveal(".case__data");
