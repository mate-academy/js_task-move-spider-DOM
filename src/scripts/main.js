'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  // eslint-disable-next-line no-shadow
  let top = e.offsetY - spider.height / 2;
  let left = e.offsetX - spider.width / 2;

  const bottomLimit = wall.clientHeight - spider.height;
  const rightLimit = wall.clientWidth - spider.width;

  top = (top < 0) ? 0
    : (top > bottomLimit) ? bottomLimit
      : top;

  left = (left < 0) ? 0
    : (left > rightLimit) ? rightLimit
      : left;

  spider.style.top = top + 'px';
  spider.style.left = left + 'px';
});
