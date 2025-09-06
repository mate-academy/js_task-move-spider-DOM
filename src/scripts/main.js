'use strict';

const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');

  if (!spider) {
    return;
  }

  const rect = wall.getBoundingClientRect();

  const X = e.clientX - rect.left;
  const Y = e.clientY - rect.top;

  const newLeft = X - spider.offsetWidth / 2;
  const newTop = Y - spider.offsetHeight / 2;

  spider.style.left = `${Math.max(0, Math.min(newLeft, wall.offsetWidth - spider.offsetWidth))}px`;
  spider.style.top = `${Math.max(0, Math.min(newTop, wall.offsetHeight - spider.offsetHeight))}px`;
});
