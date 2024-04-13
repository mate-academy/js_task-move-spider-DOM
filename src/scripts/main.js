'use strict';

document.addEventListener('click', (e) => {
  if (e.target.className !== 'wall') {
    return;
  }

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const offsetX = Math.min(
    Math.max(e.offsetX, spider.clientWidth / 2),
    wall.clientWidth - spider.clientWidth / 2,
  );
  const offsetY = Math.min(
    Math.max(e.offsetY, spider.clientHeight / 2),
    wall.clientHeight - spider.clientHeight / 2,
  );

  spider.style.top = `${offsetY - spider.clientHeight / 2}px`;
  spider.style.left = `${offsetX - spider.clientWidth / 2}px`;
});
