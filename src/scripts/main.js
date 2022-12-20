'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  const wallCoordinats = wall.getBoundingClientRect();
  const positionTop = e.clientY - wallCoordinats.top - spider.clientHeight / 2;
  const positionLeft = e.clientX - wallCoordinats.left - spider.clientWidth / 2;

  if (e.target.className === 'wall') {
    spider.style.top = `${positionTop}px`;
    spider.style.left = `${positionLeft}px`;

    if (positionTop < 0) {
      spider.style.top = '0px';
    }

    if (positionLeft < 0) {
      spider.style.left = '0px';
    }

    if (positionLeft + spider.clientWidth > wall.clientWidth) {
      spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;
    }

    if (positionTop + spider.clientHeight > wall.clientHeight) {
      spider.style.top = `${wall.clientHeight - spider.clientHeight}px`;
    }
  }
});
