'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const body = document.body;

wall.addEventListener('click', e => {
  const spiderBodyX = (body.clientWidth - wall.clientWidth) / 2;
  const spiderBodyY = (body.clientHeight - wall.clientHeight) / 2;

  let positionX = e.clientX - spiderBodyX;
  let positionY = e.clientY - spiderBodyY;

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

  spider.style.left = positionX + window.scrollX + 'px';
  spider.style.top = positionY + window.scrollY + 'px';
});
