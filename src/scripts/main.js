'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

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
  const halfW = spiderWidth / 2;
  const halfH = spiderHeight / 2;

  let centerX = e.clientX - wallRect.left;
  let centerY = e.clientY - wallRect.top;

  centerX = Math.min(Math.max(centerX, halfW), wallRect.width - halfW);
  centerY = Math.min(Math.max(centerY, halfH), wallRect.height - halfH);

  spider.style.left = `${centerX - halfW}px`;
  spider.style.top = `${centerY - halfH}px`;
});
