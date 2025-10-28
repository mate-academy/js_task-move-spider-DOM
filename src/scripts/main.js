'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const x = Math.max(
    0,
    Math.min(
      e.offsetX - spider.offsetWidth / 2,
      wall.clientWidth - spider.offsetWidth,
    ),
  );

  const y = Math.max(
    0,
    Math.min(
      e.offsetY - spider.offsetHeight / 2,
      wall.clientHeight - spider.offsetHeight,
    ),
  );

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
