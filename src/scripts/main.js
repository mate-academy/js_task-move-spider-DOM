'use strict';

document.addEventListener('click', (e) => {
  if (getComputedStyle(e.target).cursor !== 'pointer') {
    return;
  }

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const clientX = e.clientX;
  const clientY = e.clientY;

  const wallRect = wall.getBoundingClientRect();
  const wallBorderWidth = parseInt(getComputedStyle(wall).borderWidth);

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let newLeft = clientX - wallRect.left - spiderWidth / 2 - wallBorderWidth;
  let newTop = clientY - wallRect.top - spiderHeight / 2 - wallBorderWidth;

  newLeft = Math.max(0, Math.min(newLeft, wall.clientWidth - spiderWidth));

  newTop = Math.max(0, Math.min(newTop, wall.clientWidth - spiderHeight));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
