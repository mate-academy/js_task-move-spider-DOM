'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  const halfSpiderHeight = spider.clientHeight / 2;
  const halfSpiderWidth = spider.clientWidth / 2;
  let yPosition = e.offsetY - halfSpiderHeight;
  let xPosition = e.offsetX - halfSpiderWidth;
  const yMaxDistance = wall.clientHeight - spider.clientHeight;
  const xMaxDistance = wall.clientWidth - spider.clientWidth;

  if (e.target !== wall) {
    return;
  }

  if (xPosition < 0) {
    xPosition = 0;
  }

  if (yPosition < 0) {
    yPosition = 0;
  }

  if (xPosition > xMaxDistance) {
    spider.style.left = `${xMaxDistance}px`;
  } else {
    spider.style.left = `${xPosition}px`;
  }

  if (yPosition > yMaxDistance) {
    spider.style.top = `${yMaxDistance}px`;
  } else {
    spider.style.top = `${yPosition}px`;
  }
});
