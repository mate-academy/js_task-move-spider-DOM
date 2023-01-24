'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const wallRect = wall.getBoundingClientRect();
  const borderWidth = +getComputedStyle(wall).borderWidth.replace('px', '');

  if (
    e.clientX < wallRect.left
    || e.clientX > wallRect.right
    || e.clientY < wallRect.top
    || e.clientY > wallRect.bottom
  ) {
    return;
  }

  let targetLeft
    = e.clientX - wall.offsetLeft - borderWidth - spider.offsetWidth / 2 + 'px';
  let targetTop
    = e.clientY - wall.offsetTop - borderWidth - spider.offsetHeight / 2 + 'px';

  if (e.clientX < wallRect.left + borderWidth + spider.offsetWidth / 2) {
    targetLeft = 0 + 'px';
  }

  if (e.clientY < wallRect.top + borderWidth + spider.offsetHeight / 2) {
    targetTop = 0 + 'px';
  }

  if (e.clientX > wallRect.right - borderWidth - spider.offsetWidth / 2) {
    targetLeft = wall.clientWidth - spider.offsetWidth + 'px';
  }

  if (e.clientY > wallRect.bottom - borderWidth - spider.offsetHeight / 2) {
    targetTop = wall.clientHeight - spider.offsetHeight + 'px';
  }

  spider.style.left = targetLeft;
  spider.style.top = targetTop;
});
