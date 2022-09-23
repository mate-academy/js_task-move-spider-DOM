'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const wallClick = e.target;
  let x = e.offsetX - (spider.height / 2);
  let y = e.offsetY - (spider.height / 2);

  const maxY = wall.clientHeight - spider.clientHeight;
  const maxX = wall.clientWidth - spider.clientWidth;

  if (x < 1) {
    x = 0;
  };

  if (y < 1) {
    y = 0;
  };

  if (x > maxX) {
    x = maxX;
  }

  if (y > maxY) {
    y = maxY;
  }

  if (wallClick.className === 'wall') {
    spider.style.left = `${x}px`;
    spider.style.top = `${y}px`;
  }
});
