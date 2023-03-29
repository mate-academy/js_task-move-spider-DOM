'use strict';

document.addEventListener('click', e => {
  if (!e.target.closest('.wall')) {
    return;
  };

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const x = Math.min(Math.max(e.offsetX - spider.width / 2, 0),
    wall.clientWidth - spider.clientWidth);
  const y = Math.min(Math.max(e.offsetY - spider.height / 2, 0),
    wall.clientHeight - spider.clientHeight);

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
