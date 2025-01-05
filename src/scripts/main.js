'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const clickLocation = e.target.closest('.wall');

  if (!clickLocation) {
    return;
  }

  const topGap = wall.offsetTop + wall.clientTop + spider.clientHeight / 2;
  const leftGap = wall.offsetLeft + wall.clientLeft + spider.clientWidth / 2;

  const topLimit = wall.clientHeight - spider.clientHeight;
  const leftLimit = wall.clientWidth - spider.clientWidth;

  let y = e.clientY - topGap;
  let x = e.clientX - leftGap;

  y = Math.max(y, 0);
  y = Math.min(y, topLimit);

  x = Math.max(x, 0);
  x = Math.min(x, leftLimit);

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
