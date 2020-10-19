'use strict';

const wall = document.querySelector('.wall');
const wallHeight = wall.offsetHeight;
const wallWidth = wall.offsetWidth;

const spider = document.querySelector('.spider');
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

document.addEventListener('click', event => {
  if (!wall.contains(event.target)) {
    return;
  }

  moveSpider(event.offsetX, event.offsetY);
});

function moveSpider(x, y) {
  if (x > (wallWidth - spiderWidth)) {
    spider.style.left = `${wall.clientWidth - spiderWidth}px`;
  } else if (x < spiderWidth) {
    spider.style.left = `${0}px`;
  } else {
    spider.style.left = moveAlong(x);
  }

  if (y > (wallHeight - spiderHeight)) {
    spider.style.top = `${wall.clientHeight - spiderHeight}px`;
  } else if (y < spiderHeight) {
    spider.style.top = `${0}px`;
  } else {
    spider.style.top = moveAlong(y);
  }
}

function moveAlong(coordinate) {
  return `${coordinate - spiderHeight / 2}px`;
}
