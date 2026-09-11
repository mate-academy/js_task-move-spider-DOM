'use strict';

const wall = document.querySelector('.wall');
const wallRect = wall.getBoundingClientRect();
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const spiderSize = spider.clientHeight / 2;
  const border = (wall.offsetHeight - wall.clientHeight) / 2;

  const verticalMove = e.clientY - wallRect.top - border - spiderSize;
  const horizontalMove = e.clientX - wallRect.left - border - spiderSize;

  spider.style.left = `${horizontalMove}px`;
  spider.style.top = `${verticalMove}px`;
});
