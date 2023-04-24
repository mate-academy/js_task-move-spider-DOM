'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const maxWidth = wall.clientWidth - spider.clientWidth;
  const maxHeight = wall.clientHeight - spider.clientHeight;

  const x = e.offsetX - spider.clientWidth / 2;
  const y = e.offsetY - spider.clientHeight / 2;

  if (!e.target.closest('.wall')) {
    return;
  };

  function wallLimit(value, limit) {
    if (value < 0) {
      return 0;
    }

    if (value > limit) {
      return limit;
    }

    return value;
  };

  spider.style.left = wallLimit(x, maxWidth) + 'px';
  spider.style.top = wallLimit(y, maxHeight) + 'px';
});
