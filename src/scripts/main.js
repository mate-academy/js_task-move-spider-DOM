'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const clickX = e.clientX;
  const clickY = e.clientY;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const wallStyle = getComputedStyle(wall);
  const borderLeft = parseInt(wallStyle.borderLeftWidth, 10);
  const borderTop = parseInt(wallStyle.borderTopWidth, 10);

  let newLeft = clickX - wallRect.left - borderLeft - spider.offsetWidth / 2;
  let newTop = clickY - wallRect.top - borderTop - spider.offsetHeight / 2;

  newLeft = Math.max(0, Math.min(newLeft, wall.clientWidth - spiderWidth));

  newTop = Math.max(0, Math.min(newTop, wall.clientHeight - spiderHeight));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
