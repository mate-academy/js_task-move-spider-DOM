'use strict';

document.addEventListener('click', e => {
  // write code here
  const spider = document.querySelector('.spider');
  const target = e.target;

  if (target.tagName !== 'DIV') {
    return;
  }

  const fieldCoords = target.getBoundingClientRect();
  const coords = {
    x:
      e.clientX - fieldCoords.left - target.clientLeft - spider.clientWidth / 2,
    y:
      e.clientY - fieldCoords.top - target.clientTop - spider.clientHeight / 2,
  };

  if (coords.x < 0) {
    coords.x = 0;
  }

  if (coords.y < 0) {
    coords.y = 0;
  }

  if (coords.x + spider.clientWidth > target.clientWidth) {
    coords.x = target.clientWidth - spider.clientWidth;
  }

  if (coords.y + spider.clientHeight > target.clientHeight) {
    coords.y = target.clientHeight - spider.clientHeight;
  }

  spider.style.top = coords.y + 'px';
  spider.style.left = coords.x + 'px';
});
