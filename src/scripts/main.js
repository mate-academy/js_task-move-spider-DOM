'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

document.addEventListener('click', (e) => {
  if (e.target !== wall) {
    return;
  }

  let leftPosition =
    e.clientX - wall.offsetLeft - wall.clientLeft - spiderWidth / 2;
  let topPosition =
    e.clientY - wall.offsetTop - wall.clientTop - spiderHeight / 2;

  leftPosition = Math.max(leftPosition, 0);
  leftPosition = Math.min(leftPosition, wall.clientWidth - spiderWidth);

  topPosition = Math.max(topPosition, 0);
  topPosition = Math.min(topPosition, wall.clientHeight - spiderHeight);

  spider.style.left = `${leftPosition}px`;
  spider.style.top = `${topPosition}px`;
});
