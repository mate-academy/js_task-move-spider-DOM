'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall.contains(e.target)) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  let coordX = e.clientX - wallRect.left - spider.clientWidth / 2 - 10;
  let coordY = e.clientY - wallRect.top - spider.clientHeight / 2 - 10;

  if (coordX < 0) {
    coordX = 0;
  }

  if (coordX > wall.clientWidth - spider.clientWidth) {
    coordX = wall.clientWidth - spider.clientWidth;
  }

  if (coordY < 0) {
    coordY = 0;
  }

  if (coordY > wall.clientHeight - spider.clientHeight) {
    coordY = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${coordX}px`;
  spider.style.top = `${coordY}px`;
});
