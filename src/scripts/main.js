'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallProp = wall.getBoundingClientRect();
const spiderProp = spider.getBoundingClientRect();

// eslint-disable-next-line no-shadow
document.addEventListener('click', event => {
  if (event.clientX < (wallProp.left + wall.clientLeft)
    || event.clientX > (wallProp.left + wallProp.width - wall.clientLeft)) {
    return;
  }

  if (event.clientY < (wallProp.top + wall.clientTop)
    || event.clientY > (wallProp.top + wallProp.height - wall.clientTop)) {
    return;
  }

  let dX = event.clientX - wallProp.left
    - spiderProp.width / 2 - wall.clientLeft;
  let dY = event.clientY - wallProp.top
    - spiderProp.height / 2 - wall.clientTop;
  const stopleft = spiderProp.width / 2;
  const stopRight = wallProp.width - wall.clientLeft * 2 - spiderProp.width;
  const stopTop = spiderProp.height / 2;
  const stopBottom = wallProp.height - wall.clientTop * 2 - spiderProp.width;

  if (dX < stopleft) {
    dX = 0;
  } else if (dX > stopRight) {
    dX = stopRight;
  }

  if (dY < stopTop) {
    dY = 0;
  } else if (dY > stopBottom) {
    dY = stopBottom;
  }

  spider.style.top = `${dY}px`;
  spider.style.left = `${dX}px`;
});
