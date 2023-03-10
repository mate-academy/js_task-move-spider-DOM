'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  };

  const limitWidth = wall.clientWidth - spider.clientWidth;
  const limitHeight = wall.clientHeight - spider.clientHeight;

  const x = Math.min(Math.max(0, e.offsetX - spider.clientWidth / 2),
    limitWidth);
  const y = Math.min(Math.max(0, e.offsetY - spider.clientHeight / 2),
    limitHeight);

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
