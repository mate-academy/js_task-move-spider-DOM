'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const click = e.target.closest('.wall');

  if (!click) {
    return;
  }

  let x = e.offsetX - spider.clientWidth / 2;
  let y = e.offsetY - spider.clientHeight / 2;

  const maxWidth = wall.clientWidth - spider.clientWidth;
  const maxHeight = wall.clientHeight - spider.clientHeight;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > maxWidth) {
    x = maxWidth;
  }

  if (y > maxHeight) {
    y = maxHeight;
  }

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
