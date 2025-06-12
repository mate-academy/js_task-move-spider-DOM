'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const [spiderWidth, spiderHeight] = [spider.clientWidth, spider.clientHeight];
const [wallWidth, wallHeight] = [wall.clientWidth, wall.clientHeight];

wall.addEventListener('click', (e) => {
  let [x, y] = [e.offsetX - spiderWidth / 2, e.offsetY - spiderHeight / 2];

  if (x < 0) {
    x = 0;
  } else if (x > wallWidth - spiderWidth) {
    x = wallWidth - spiderWidth;
  }

  if (y < 0) {
    y = 0;
  } else if (y > wallHeight - spiderHeight) {
    y = wallHeight - spiderHeight;
  }
  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
