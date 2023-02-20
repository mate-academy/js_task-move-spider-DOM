'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  if (!e.target.closest('.wall')) {
    return;
  }

  let coordX = e.offsetX;
  let coordY = e.offsetY;
  const maxX = wall.clientWidth - (spider.offsetWidth / 2);
  const maxY = wall.clientHeight - (spider.offsetHeight / 2);

  if (coordX < spider.offsetWidth / 2) {
    coordX = spider.offsetWidth / 2;
  }

  if (coordX > maxX) {
    coordX = maxX;
  }

  if (coordY < spider.offsetHeight / 2) {
    coordY = spider.offsetHeight / 2;
  }

  if (coordY > maxY) {
    coordY = maxY;
  }

  spider.style.top = `${coordY}px`;
  spider.style.left = `${coordX}px`;
  spider.style.transform = 'translate(-50%, -50%)';
});
