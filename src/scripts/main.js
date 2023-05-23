'use strict';

document.addEventListener('click', e => {
  const targetElem = e.target.className;
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const halfSpider = spider.width / 2;

  let positionOfCLickX = e.offsetX - halfSpider;
  let positionOfCLickY = e.offsetY - halfSpider;

  if (targetElem !== 'wall') {
    return;
  };

  if (positionOfCLickX < 0) {
    positionOfCLickX = 0;
  }

  if (positionOfCLickY < 0) {
    positionOfCLickY = 0;
  }

  if (positionOfCLickY + halfSpider > wall.clientHeight) {
    positionOfCLickY = wall.clientHeight - spider.height;
  }

  if (positionOfCLickX + halfSpider > wall.clientWidth) {
    positionOfCLickX = wall.clientWidth - spider.width;
  }

  spider.style.left = `${positionOfCLickX}px`;
  spider.style.top = `${positionOfCLickY}px`;
});
