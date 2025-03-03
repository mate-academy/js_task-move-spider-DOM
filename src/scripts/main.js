'use strict';

document.addEventListener('click', (e) => {
  const { x, y } = e;
  const spider = document.querySelector('.spider');
  const field = document.querySelector('.wall');

  let posX = x - field.offsetLeft - field.clientLeft - spider.clientWidth / 2;

  posX = Math.max(0, Math.min(posX, field.clientWidth - spider.clientWidth));

  let posY = y - field.offsetTop - field.clientTop - spider.clientHeight / 2;

  posY = Math.max(0, Math.min(posY, field.clientHeight - spider.clientHeight));

  spider.style.left = `${posX}px`;
  spider.style.top = `${posY}px`;
});
