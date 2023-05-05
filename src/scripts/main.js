'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target.className !== 'wall') {
    return;
  };

  const posX = wall.clientWidth - spider.clientWidth;
  const posY = wall.clientHeight - spider.clientHeight;
  let spidX = e.offsetX - (spider.clientWidth / 2);
  let spidY = e.offsetY - (spider.clientHeight / 2);


  if (spidX > posX) {
    spidX = posX;
  }

  if (spidY > posY) {
    spidY = posY;
  }

  if (spidX < 0) {
    spidX = 0;
  }

  if (spidY < 0) {
    spidY = 0;
  }

  spider.style.left = `${spidX}px`;
  spider.style.top = `${spidY}px`;
});
