

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
