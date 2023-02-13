'use strict';

document.addEventListener('click', e => {
  const field = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const fieldCoords = field.getBoundingClientRect();

  const spiderCoords = {
    top: e.clientY - fieldCoords.top
      - field.clientTop - spider.clientHeight / 2,
    left: e.clientX - fieldCoords.left
      - field.clientLeft - spider.clientWidth / 2,
  };

  if (e.target.className !== 'wall') {
    return;
  }

  if (spiderCoords.top < 0) {
    spiderCoords.top = 0;
  }

  if (spiderCoords.left < 0) {
    spiderCoords.left = 0;
  }

  if (spiderCoords.left + spider.clientWidth > field.clientWidth) {
    spiderCoords.left = field.clientWidth - spider.clientWidth;
  }

  if (spiderCoords.top + spider.clientHeight > field.clientHeight) {
    spiderCoords.top = field.clientHeight - spider.clientHeight;
  }

  spider.style.left = spiderCoords.left + 'px';
  spider.style.top = spiderCoords.top + 'px';
});
