'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  // write code here
  const wallSize = wall.getBoundingClientRect();
  const spiderSize = spider.getBoundingClientRect();

  let x = e.clientX - wallSize.left - spiderSize.width / 2;
  let y = e.clientY - wallSize.top - spiderSize.height / 2;

  const maxX = wallSize.width - spiderSize.width;
  const maxY = wallSize.height - spiderSize.height;

  if (x > maxX) {
    x = maxX;
  }

  if (y > maxY) {
    y = maxY;
  }

  spider.style.position = 'absolute';
  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
