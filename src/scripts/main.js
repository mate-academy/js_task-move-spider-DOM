'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  let posY = e.y - wall.offsetTop - wall.clientTop - spider.clientHeight / 2;

  posY = Math.max(0, Math.min(posY, wall.clientHeight - spider.clientHeight));

  let posX = e.x - wall.offsetLeft - wall.clientLeft - spider.clientWidth / 2;

  posX = Math.max(0, Math.min(posX, wall.clientWidth - spider.clientWidth));

  spider.style.top = `${posY}px`;
  spider.style.left = `${posX}px`;
});
