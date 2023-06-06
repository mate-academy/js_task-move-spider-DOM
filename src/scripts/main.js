'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const wallLeft = wall.offsetLeft + wall.clientLeft;
  const wallTop = wall.offsetTop + wall.clientTop;

  let x = e.clientX - wallLeft - spiderWidth / 2;
  let y = e.clientY - wallTop - spiderHeight / 2;

  if (x < 0) {
    x = 0;
  }

  if (x > wallWidth - spiderWidth) {
    x = wallWidth - spiderWidth;
  }

  if (y < 0) {
    y = 0;
  }

  if (y > wallHeight - spiderHeight) {
    y = wallHeight - spiderHeight;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
