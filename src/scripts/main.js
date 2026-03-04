'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const [wallBorderLeft, wallBorderTop] = [wall.clientLeft, wall.clientTop];
  const [spiderWidth, spiderHeight] = [spider.offsetWidth, spider.offsetHeight];

  let newX = e.clientX - wallRect.left - wallBorderLeft - spiderWidth / 2;
  let newY = e.clientY - wallRect.top - wallBorderTop - spiderHeight / 2;

  if (newX < 0) {
    newX = 0;
  }

  if (newY < 0) {
    newY = 0;
  }

  const maxLeft = wall.clientWidth - spiderWidth;
  const maxTop = wall.clientHeight - spiderHeight;

  if (newX > maxLeft) {
    newX = maxLeft;
  }

  if (newY > maxTop) {
    newY = maxTop;
  }

  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
