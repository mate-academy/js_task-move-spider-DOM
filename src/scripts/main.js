'use strict';

document.addEventListener('click', e => {
  // import document
  const body = document.body;
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  // get click position
  const clickX = e.clientX;
  const clickY = e.clientY;

  // calculate spider position
  const spiderBodyX = (body.clientWidth - wall.clientWidth) / 2;
  const spiderBodyY = (body.clientHeight - wall.clientHeight) / 2;

  // calculate
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
