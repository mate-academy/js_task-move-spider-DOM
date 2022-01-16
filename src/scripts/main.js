'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const item = e.target.closest('.wall');

  if (!item || e.target === spider) {
    return;
  }

  let x = e.offsetX - (spider.clientWidth / 2);
  let y = e.offsetY - (spider.clientHeight / 2);

  const maxLeft = wall.clientWidth - spider.clientWidth / 2;
  const maxTop = wall.clientHeight - spider.clientHeight / 2;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > maxLeft - (spider.clientWidth / 2)) {
    x = maxLeft - (spider.clientWidth / 2);
  }

  if (y > maxTop - (spider.clientHeight / 2)) {
    y = maxTop - (spider.clientHeight / 2);
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
