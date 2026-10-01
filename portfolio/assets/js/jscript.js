'use strict';

const menuIcon = document.querySelector('.header__menu-icon');
const menu = document.querySelector('.header__menu');

const closeIcon = document.querySelector('.header__menu-close');

const logoMenu = document.querySelector('.header__logo-menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('header__menu--active');
  logoMenu.classList.toggle('header__logo--active');
});

closeIcon.addEventListener('click', () => {
  menu.classList.remove('header__menu--active');
  logoMenu.classList.remove('header__logo--active');
});