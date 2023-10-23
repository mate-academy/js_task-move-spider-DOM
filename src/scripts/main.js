'use strict';

const body = document.body;
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

// eslint-disable-next-line no-shadow
wall.addEventListener('click', (event) => {
  const clickX = event.clientX;
  const clickY = event.clientY;

  const freeBodyX = (body.clientWidth - wall.clientWidth) / 2;
  const freeBodyY = (body.clientHeight - wall.clientHeight) / 2;

  let positionY = clickY - freeBodyY;
  let positionX = clickX - freeBodyX;

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

  spider.style.top = `${positionY + window.pageYOffset}px`;
  spider.style.left = `${positionX + window.pageXOffset}px`;
});
