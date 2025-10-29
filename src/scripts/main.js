'use strict';

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const spider = wall.children[0];
  const rect = wall.getBoundingClientRect();

  const style = getComputedStyle(wall);
  const border = parseFloat(style.borderLeftWidth);

  const posX = e.clientX - rect.left - border;
  const posY = e.clientY - rect.top - border;

  const x = posX - spider.offsetWidth / 2;
  const y = posY - spider.offsetHeight / 2;

  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;

  function clamp(val, min, max) {
    return Math.max(min, Math.min(val, max));
  }

  spider.style.left = clamp(x, 0, maxX) + 'px';
  spider.style.top = clamp(y, 0, maxY) + 'px';
});
