'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();

  let x = e.clientX - rect.left - wall.clientLeft;
  let y = e.clientY - rect.top - wall.clientTop;

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  if (x - spiderWidth / 2 < 0) {
    x = spiderWidth / 2;
  } else if (x + spiderWidth / 2 > wallWidth) {
    x = wallWidth - spiderWidth / 2;
  }

  if (y - spiderHeight / 2 < 0) {
    y = spiderHeight / 2;
  } else if (y + spiderHeight / 2 > wallHeight) {
    y = wallHeight - spiderHeight / 2;
  }

  spider.style.left = `${x - spiderWidth / 2}px`;
  spider.style.top = `${y - spiderHeight / 2}px`;
});
