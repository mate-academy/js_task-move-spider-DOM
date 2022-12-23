'use strict';

document.addEventListener('click', e => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const wall = document.querySelector('.wall');
  const wallCoord = wall.getBoundingClientRect();
  const spider = document.querySelector('.spider');

  let x = e.clientX - wallCoord.x - wall.clientLeft - spider.clientWidth / 2;
  let y = e.clientY - wallCoord.y - wall.clientTop - spider.clientHeight / 2;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x + spider.clientWidth > wall.clientWidth) {
    x = wall.clientWidth - spider.clientWidth;
  }

  if (y + spider.clientHeight > wall.clientHeight) {
    y = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
