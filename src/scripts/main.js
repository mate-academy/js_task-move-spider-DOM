'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = wall.querySelector('.spider');
  const rect = wall.getBoundingClientRect();

  if (
    e.clientX < rect.left ||
    e.clientX > rect.right ||
    e.clientY < rect.top ||
    e.clientY > rect.bottom
  ) {
    return;
  }

  const x = e.clientX - rect.left - wall.clientLeft - spider.offsetWidth / 2;

  const y = e.clientY - rect.top - wall.clientTop - spider.offsetHeight / 2;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  const left = Math.min(maxLeft, Math.max(0, x));
  const fromTop = Math.min(maxTop, Math.max(0, y));

  spider.style.left = `${left}px`;
  spider.style.top = `${fromTop}px`;
});
