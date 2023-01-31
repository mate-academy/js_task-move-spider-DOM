'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderParams = spider.getBoundingClientRect();
const wallParams = wall.getBoundingClientRect();

wall.addEventListener('click', (e) => {
  let moveLeft = e.clientX - spiderParams.x - spiderParams.width / 2;
  let moveTop = e.clientY - spiderParams.y - spiderParams.width / 2;

  if (moveLeft < 0) {
    moveLeft = 0;
  } else if (e.clientX + spiderParams.width / 2 > wallParams.right) {
    moveLeft = wallParams.right - spiderParams.width - spiderParams
      .x - getComputedStyle(wall).borderWidth.slice(0, -2);
  };

  if (moveTop < 0) {
    moveTop = 0;
  } else if (e.clientY + spiderParams.height / 2 > wallParams.bottom) {
    moveTop = wallParams.bottom - spiderParams.height - spiderParams
      .y - getComputedStyle(wall).borderWidth.slice(0, -2);
  };

  spider.style.left = `${moveLeft}px`;
  spider.style.top = `${moveTop}px`;
});
