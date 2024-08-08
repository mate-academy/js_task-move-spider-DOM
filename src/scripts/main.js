'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const centreOfSpider = spider.offsetWidth / 2;

  const posY = e.clientY - (document.body.clientHeight - wall.clientHeight) / 2;
  const posX = e.clientX - (document.body.clientWidth - wall.clientWidth) / 2;

  const wallRect = wall.getBoundingClientRect();

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  const border = (wall.offsetHeight - wall.clientWidth) / 2;

  let moveX = posX - centreOfSpider;
  let moveY = posY - centreOfSpider;

  if (moveX < 0) {
    moveX = 0;
  } else if (moveX > wallRect.width - spider.offsetWidth) {
    moveX = wallRect.width - spider.offsetWidth - border * 2;
  }

  if (moveY < 0) {
    moveY = 0;
  } else if (moveY > wallRect.height - spider.offsetHeight) {
    moveY = wallRect.height - spider.offsetHeight - border * 2;
  }

  spider.style.top = moveY + 'px';
  spider.style.left = moveX + 'px';
});
