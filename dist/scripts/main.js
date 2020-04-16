'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target !== wall && e.target !== spider) {
    return;
  }

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const wallCoords = wall.getBoundingClientRect();
  const maxX = wallWidth - spiderWidth;
  const maxY = wallHeight - spiderHeight;

  let x = e.clientX - wallCoords.left - spiderWidth / 2 - wall.clientLeft;
  let y = e.clientY - wallCoords.top - spiderHeight / 2 - wall.clientTop;

  if (x < 0) {
    x = 0;
  } else if (x > maxX) {
    x = maxX;
  }

  if (y < 0) {
    y = 0;
  } else if (y > maxY) {
    y = maxY;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
