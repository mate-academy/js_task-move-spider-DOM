'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  };
  
  const wallContentLeft = wall.offsetLeft + wall.clientLeft;
  const wallContentTop = wall.offsetTop + wall.clientTop;

  const coords = {
    x: null,
    y: null,
  };

  if (e.pageX < wallContentLeft + spider.clientWidth) {
    coords.x = 0;
  } else if (
    e.pageX >
    wallContentLeft + wall.clientWidth - spider.clientWidth
  ) {
    coords.x = wall.clientWidth - spider.clientWidth;
  } else {
    coords.x = e.pageX - wallContentLeft - spider.clientWidth / 2;
  }

  if (e.pageY < wallContentTop + spider.clientHeight) {
    coords.y = 0;
  } else if (
    e.pageY >
    wallContentTop + wall.clientHeight - spider.clientHeight
  ) {
    coords.y = wall.clientHeight - spider.clientHeight;
  } else {
    coords.y = e.pageY - wallContentTop - spider.clientHeight / 2;
  }

  spider.style.top = coords.y + 'px';
  spider.style.left = coords.x + 'px';
});
