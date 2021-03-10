'use strict';

const wallElement = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderX = wallElement.clientWidth - spider.clientWidth;
const spiderY = wallElement.clientHeight - spider.clientHeight;

wallElement.addEventListener('click', (clickHandler) => {
  let positionX = clickHandler.offsetX - (spider.offsetWidth / 2);
  let positionY = clickHandler.offsetY - (spider.offsetHeight / 2);

  if (positionX > spiderX) {
    positionX = spiderX;
  }

  if (positionY > spiderY) {
    positionY = spiderY;
  }

  if (positionX < 0) {
    positionX = 0;
  }

  if (positionY < 0) {
    positionY = 0;
  }

  spider.style.left = `${positionX}px`;
  spider.style.top = `${positionY}px`;
});
