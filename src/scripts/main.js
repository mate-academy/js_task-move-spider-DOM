'use strict';

const body = document.body;
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const clickX = e.clientX;
  const clickY = e.clientY;

  const spiderBodyX = (body.clientWidth - wall.clientWidth) / 2;
  const spiderBodyY = (body.clientHeight - wall.clientHeight) / 2;

  let positionX = clickX - spiderBodyX;
  let positionY = clickY - spiderBodyY;

  if (positionX < spider.offsetWidth / 2) {
    positionX = 0;
  } else if ((positionX + spider.offsetWidth / 2) > wall.clientWidth) {
    positionX = wall.clientWidth - spider.offsetWidth;
  } else {
    positionX -= spider.offsetWidth / 2;
  }

  if (positionY < spider.offsetHeight / 2) {
    positionY = 0;
  } else if ((positionY + spider.offsetHeight / 2) > wall.clientHeight) {
    positionY = wall.clientHeight - spider.offsetHeight;
  } else {
    positionY -= spider.offsetHeight / 2;
  }

  spider.style.top = `${positionY + window.scrollY}px`;
  spider.style.left = `${positionX + window.scrollX}px`;
});
