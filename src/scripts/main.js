'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target === wall) {
    const coords = wall.getBoundingClientRect();
    const borderWidth = parseInt(getComputedStyle(wall).borderWidth);

    let x = e.clientX - coords.left - spider.clientWidth / 2 - borderWidth;
    let y = e.clientY - coords.top - spider.clientHeight / 2 - borderWidth;

    const maxX = coords.width - spider.clientWidth - borderWidth * 2;
    const maxY = coords.height - spider.clientHeight - borderWidth * 2;

    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    spider.style.left = x + 'px';
    spider.style.top = y + 'px';
  }
});
