'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (wall === e.target) {
    const wallX = wall.getBoundingClientRect().x;
    const wallY = wall.getBoundingClientRect().y;
    const wallWidth = wall.clientWidth;
    const wallHeight = wall.clientHeight;
    const borderWidth = (wall.getBoundingClientRect().width - wallWidth) / 2;
    const borderHeight = (wall.getBoundingClientRect().height - wallHeight) / 2;
    const spiderHeight = spider.clientWidth;
    const spiderWidth = spider.clientHeight;
    const maxY = wallHeight - spiderHeight;
    const maxX = wallWidth - spiderWidth;
    let y = e.clientY - wallY - borderHeight - spiderHeight / 2;
    let x = e.clientX - wallX - borderWidth - spiderWidth / 2;

    if (y > maxY) {
      y = maxY;
    }

    if (x > maxX) {
      x = maxX;
    }

    if (e.clientY - wallY < spiderHeight / 2 + borderHeight) {
      y = 0;
    }

    if (e.clientX - wallX < spiderWidth / 2 + borderWidth) {
      x = 0;
    }
    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  }
});
