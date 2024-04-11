'use strict';

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const offsetX = Math.min(
    Math.max(e.offsetX, spider.clientWidth / 2),
    wall.clientWidth,
  );
  const offsetY = Math.min(
    Math.max(e.offsetY, spider.clientHeight / 2),
    wall.clientHeight,
  );

  spider.style.top = `${offsetY - spider.clientHeight / 2}px`;
  spider.style.left = `${offsetX - spider.clientWidth / 2}px`;
});
