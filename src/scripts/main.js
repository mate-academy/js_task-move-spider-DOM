'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallSizes = wall.getBoundingClientRect();

  spider.style.top = `${e.clientY - wallSizes.top - spider.clientHeight / 1.5}px`;
  spider.style.left = `${e.clientX - wallSizes.left - spider.clientWidth / 1.5}px`;
});
