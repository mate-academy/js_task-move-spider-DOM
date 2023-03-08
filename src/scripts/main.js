'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');

  if (e.target.className !== 'wall') {
    return;
  }

  const spider = document.querySelector('.spider');

  const wallCoords = wall.getBoundingClientRect();

  let y = e.clientY - wallCoords.top
    - wall.clientTop - spider.clientHeight / 2;
  let x = e.clientX - wallCoords.left
    - wall.clientLeft - spider.clientWidth / 2;

  if (y <= 0) {
    y = 0;
  };

  if (x <= 0) {
    x = 0;
  };

  if (y + spider.clientHeight > wall.clientHeight) {
    y = wall.clientHeight - spider.clientHeight;
  }

  if (x + spider.clientWidth > wall.clientWidth) {
    x = wall.clientWidth - spider.clientWidth;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
