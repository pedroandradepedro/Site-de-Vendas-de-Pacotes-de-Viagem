import express from "express";

const porta = 3000;
const localhost = "0.0.0.0";
const app = express();

("use strict");

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
};

navToggleEvent(navElemArr);
navToggleEvent(navLinks);

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

function atualizarValorTotal() {
  let precoTexto = document.querySelector(".price").textContent;
  let precoPorLugar = parseFloat(precoTexto.replace(/\D/g, ""));

  let quantidade = document.getElementById("quantos").value;
  let valorTotal = quantidade * precoPorLugar;

  document.getElementById("valorTotal").textContent = `R$ ${valorTotal.toFixed(
    2
  )}`;
}
