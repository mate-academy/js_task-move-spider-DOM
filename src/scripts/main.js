'use strict';

document.addEventListener('click', (e) => {
  // write code here

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!e.target.closest('.wall')) {
    return;
  }

  const minLeft = 0;
  const maxLeft = wall.clientWidth - spider.clientWidth;
  const minTop = 0 + wall.scrollTop;
  const maxTop = wall.clientHeight - spider.clientHeight + wall.scrollTop;

  const leftPosition = e.offsetX - spider.clientWidth / 2;
  const topPosition = e.offsetY - spider.clientWidth / 2;

  spider.style.left = Math.min(Math.max(leftPosition, minLeft), maxLeft) + 'px';
  spider.style.top = Math.min(Math.max(topPosition, minTop), maxTop) + 'px';
});
