'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target.className !== 'wall') {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  const x = e.clientX - wallRect.left - spider.clientWidth / 2;

  const y = e.clientY - wallRect.top - spider.clientHeight / 2;

  const posX = Math.max(
    0, Math.min(x, wall.clientWidth - spider.clientWidth)
  );
  const posY = Math.max(
    0, Math.min(y, wall.clientHeight - spider.clientHeight)
  );

  spider.style.left = `${posX}px`;
  spider.style.top = `${posY}px`;
});
