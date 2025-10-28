'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const x = Math.max(
    0,
    Math.min(
      e.clientX - wallRect.left - spider.offsetWidth / 2,
      wallRect.width - spider.offsetWidth,
    ),
  );
  const y = Math.max(
    0,
    Math.min(
      e.clientY - wallRect.top - spider.offsetHeight / 2,
      wallRect.height - spider.offsetHeight,
    ),
  );

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
