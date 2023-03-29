'use strict';

document.addEventListener('click', e => {
  if (!e.target.closest('.wall')) {
    return;
  };

  const bricks = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const x = Math.min(Math.max(e.offsetX - spider.width / 2, 0),
    bricks.clientWidth - spider.clientWidth);
  const y = Math.min(Math.max(e.offsetY - spider.height / 2, 0),
    bricks.clientHeight - spider.clientHeight);

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
