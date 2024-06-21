'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallRect = wall.getBoundingClientRect();

  if (!e.target.closest('.wall')) {
    return;
  }

  let coordX =
    e.clientX - wall.clientLeft - wallRect.left - spider.clientWidth / 2;
  let coordY =
    e.clientY - wallRect.y - wall.clientTop - spider.clientHeight / 2;

  if (coordX < 0) {
    coordX = 0;
  }

  if (coordY < 0) {
    coordY = 0;
  }

  if (wall.clientWidth < spider.clientWidth + coordX) {
    coordX = wall.clientWidth - spider.clientWidth;
  }

  if (wall.clientHeight < spider.clientHeight + coordY) {
    coordY = wall.clientHeight - spider.clientHeight;
  }

  spider.style.top = `${coordY}px`;
  spider.style.left = `${coordX}px`;
});
