'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target === wall) {
    const wallRect = wall.getBoundingClientRect();
    const spiderX = e.clientX - wallRect.left - spider.clientWidth / 2;
    const spiderY = e.clientY - wallRect.top - spider.clientHeight / 2;

    const maxX = wall.clientWidth - spider.clientWidth;
    const maxY = wall.clientHeight - spider.clientHeight;

    spider.style.left = Math.max(0, Math.min(maxX, spiderX)) + 'px';
    spider.style.top = Math.max(0, Math.min(maxY, spiderY)) + 'px';
  }
});
