'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall.contains(e.target)) {
    return;
  }

  const item = e.target.closest('.wall');

  if (!item || e.target === spider) {
    return;
  }

  let x = e.offsetX - (spider.clientWidth / 2);
  let y = e.offsetY - (spider.clientHeight / 2);

  const maxLeft = wall.clientWidth - (spider.clientWidth / 2);
  const maxTop = wall.clientHeight - (spider.clientHeight / 2);

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  const cornerLeft = maxLeft - (spider.clientWidth / 2)
  const cornerTop = maxTop - (spider.clientHeight / 2)

  if (x > cornerLeft) {
    x = cornerLeft;
  }

  if (y > cornerTop) {
    y = cornerTop;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
