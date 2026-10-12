'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const clickX = e.clientX - wallRect.left - wall.clientLeft;
  const clickY = e.clientY - wallRect.top - wall.clientTop;

  const maxLeft = wall.clientWidth - spiderWidth;
  const maxTop = wall.clientHeight - spiderHeight;

  const left = Math.max(0, Math.min(clickX - spiderWidth / 2, maxLeft));

  const spiderTop = Math.max(0, Math.min(clickY - spiderHeight / 2, maxTop));

  spider.style.left = `${left}px`;
  spider.style.top = `${spiderTop}px`;
});
