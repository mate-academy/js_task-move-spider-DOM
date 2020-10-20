'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

document.addEventListener('click', event => {
  if (!wall.contains(event.target)) {
    return;
  }

  spiderMovement(event.offsetX, event.offsetY);
});

function spiderMovement(x, y) {
  if (x > (wallWidth - spiderWidth)) {
    spider.style.left = `${wall.clientWidth - spiderWidth}px`;
  } else if (x < spiderWidth) {
    spider.style.left = `${0}px`;
  } else {
    spider.style.left = `${x - spiderHeight / 2}px`;
  }

  if (y > (wallHeight - spiderHeight)) {
    spider.style.top = `${wall.clientHeight - spiderHeight}px`;
  } else if (y < spiderHeight) {
    spider.style.top = `${0}px`;
  } else {
    spider.style.top = `${y - spiderHeight / 2}px`;
  };
};
