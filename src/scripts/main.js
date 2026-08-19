'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  if (
    e.clientX >= wallRect.left &&
    e.clientX <= wallRect.right &&
    e.clientY >= wallRect.top &&
    e.clientY <= wallRect.bottom
  ) {
    const clientLeft = wall.clientLeft || 0;
    const clientTop = wall.clientTop || 0;

    const x = e.clientX - spider.offsetWidth / 2 - wallRect.left - clientLeft;
    const y = e.clientY - spider.offsetHeight / 2 - wallRect.top - clientTop;

    const maxX = wall.clientWidth - spider.offsetWidth;
    const maxY = wall.clientHeight - spider.offsetHeight;

    spider.style.left = Math.max(0, Math.min(x, maxX)) + 'px';
    spider.style.top = Math.max(0, Math.min(y, maxY)) + 'px';
  }
});
