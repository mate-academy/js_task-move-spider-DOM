'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const border = wall.clientLeft;

document.addEventListener('click', e => {
  const spiderCoords = spider.getBoundingClientRect();
  const wallCoords = wall.getBoundingClientRect();

  const maxWidth = wallCoords.width - spiderCoords.width - (border * 2);
  const maxHeight = wallCoords.height - spiderCoords.height - (border * 2);

  let left = e.clientX
  - wallCoords.left - wall.clientLeft - spiderCoords.width / 2;
  let Top = e.clientY
  - wallCoords.top - wall.clientTop - spiderCoords.height / 2;

  if (!e.target.closest('.wall')) {
    return;
  }

  if (left < 0) {
    left = 0;
  }

  if (left > maxWidth) {
    left = maxWidth;
  }

  if (Top < 0) {
    Top = 0;
  }

  if (Top > maxHeight) {
    Top = maxHeight;
  }

  spider.style.left = left + 'px';
  spider.style.top = Top + 'px';
});
