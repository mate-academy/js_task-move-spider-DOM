/* eslint-disable no-console */
'use strict';

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const spider = wall.querySelector('.spider');
  const rect = wall.getBoundingClientRect();
  let x = e.clientX - rect.left - wall.clientLeft;
  let y = e.clientY - rect.top - wall.clientTop;

  const halfSpider = spider.offsetWidth / 2;
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  x = Math.max(halfSpider, Math.min(x, wallWidth - halfSpider));
  y = Math.max(halfSpider, Math.min(y, wallHeight - halfSpider));

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';

  spider.style.transform = 'translate(-50%, -50%)';
});
