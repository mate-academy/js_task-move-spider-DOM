'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const clickX = e.clientX;
  const clickY = e.clientY;

  const wallRect = wall.getBoundingClientRect();
  const wallBorder = parseInt(getComputedStyle(wall).borderWidth, 10) || 0;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let spiderX = clickX - wallRect.left - wallBorder - spiderWidth / 2;
  let spiderY = clickY - wallRect.top - wallBorder - spiderHeight / 2;

  const maxLeft = wall.clientWidth - spiderWidth;
  const maxTop = wall.clientHeight - spiderHeight;

  if (spiderX < 0) {
    spiderX = 0;
  } else if (spiderX > maxLeft) {
    spiderX = maxLeft;
  }

  if (spiderY < 0) {
    spiderY = 0;
  } else if (spiderY > maxTop) {
    spiderY = maxTop;
  }

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
