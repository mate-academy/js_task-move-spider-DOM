'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');

  if (e.target.className !== 'wall') {
    return;
  }

  const spider = document.querySelector('.spider');

  const wallCoords = wall.getBoundingClientRect();

  let x = e.clientY - wallCoords.top
    - wall.clientTop - spider.clientHeight / 2;
  let y = e.clientX - wallCoords.left
    - wall.clientLeft - spider.clientWidth / 2;

  if (x <= 0) {
    x = 0;
  };

  if (y <= 0) {
    y = 0;
  };

  if (x + spider.clientHeight > wall.clientHeight) {
    x = wall.clientHeight - spider.clientHeight;
  }

  if (y + spider.clientWidth > wall.clientWidth) {
    y = wall.clientWidth - spider.clientWidth;
  }

  spider.style.top = `${x}px`;
  spider.style.left = `${y}px`;
});
