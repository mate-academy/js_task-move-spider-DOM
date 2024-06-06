'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  }

  const wallBorder = wall.getBoundingClientRect();

  let coordX =
    e.clientX - wall.clientLeft - wallBorder.left - spider.clientWidth / 2;

  if (coordX < 0) {
    coordX = 0;
  }

  if (wall.clientWidth < spider.clientWidth + coordX) {
    coordX = wall.clientWidth - spider.clientWidth;
  }

  let coordY =
    e.clientY - wallBorder.y - wall.clientTop - spider.clientHeight / 2;

  if (coordY < 0) {
    coordY = 0;
  }

  if (wall.clientHeight < spider.clientHeight + coordY) {
    coordY = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${coordX}px`;
  spider.style.top = `${coordY}px`;
});
