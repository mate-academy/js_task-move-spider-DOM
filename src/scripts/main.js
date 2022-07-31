'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  let coordX = e.clientX - wall.offsetLeft - wall.clientLeft
    - spider.offsetWidth / 2;
  let coordY = e.clientY - wall.offsetTop - wall.clientTop
    - spider.offsetHeight / 2;

  if (!wall.contains(e.target)) {
    return;
  }

  if (coordX < 0) {
    coordX = 0;
  }

  if (coordY < 0) {
    coordY = 0;
  }

  if (coordX + spider.clientWidth > wall.clientWidth) {
    coordX = wall.clientWidth - spider.clientWidth;
  }

  if (coordY + spider.clientHeight > wall.clientHeight) {
    coordY = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = coordX + 'px';
  spider.style.top = coordY + 'px';
});
