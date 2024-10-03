'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall.contains(e.target)) {
    return;
  }

  const [maxX, maxY] = [
    wall.clientWidth - spider.clientWidth,
    wall.clientHeight - spider.clientHeight,
  ];

  const x = Math.max(0, Math.min(e.offsetX - spider.clientWidth / 2, maxX));
  const y = Math.max(0, Math.min(e.offsetY - spider.clientHeight / 2, maxY));

  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
});
