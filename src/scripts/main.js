'use strict';

document.addEventListener('click', event => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (event.target !== wall) {
    return;
  }

  let posX = event.offsetX - spider.offsetWidth / 2;
  let posY = event.offsetY - spider.offsetHeight / 2;

  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;

  if (posX < 0) {
    posX = 0;
  }

  if (posX > maxX) {
    posX = maxX;
  }

  if (posY < 0) {
    posY = 0;
  }

  if (posY > maxY) {
    posY = maxY;
  }

  spider.style.left = `${posX}px`;
  spider.style.top = `${posY}px`;
});
