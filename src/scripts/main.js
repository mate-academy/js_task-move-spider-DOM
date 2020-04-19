'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const item = event.target.closest('.wall');

  if (!item) {
    return;
  }

  let left = event.clientX
  - wall.offsetLeft - wall.clientLeft - spider.offsetWidth / 2;
  let Right = event.clientY
  - wall.offsetTop - wall.clientTop - spider.offsetHeight / 2;

  if (left < 0) {
    left = 0;
  }

  if (Right < 0) {
    Right = 0;
  }

  if (left + spider.clientWidth > wall.clientWidth) {
    left = wall.clientWidth - spider.clientWidth;
  }

  if (Right + spider.clientWidth > wall.clientHeight) {
    Right = wall.clientHeight - spider.clientHeight;
  }
  spider.style.left = `${left}px`;
  spider.style.top = `${Right}px`;
});
