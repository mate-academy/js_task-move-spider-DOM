'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallCoords = wall.getBoundingClientRect();
  const maxLeft = wall.clientWidth - spider.clientWidth;
  const minLeft = wallCoords.left + wall.clientLeft + (spider.clientWidth / 2);
  const maxTop = wall.clientHeight - spider.clientHeight;
  const minTop = wallCoords.top + wall.clientLeft + (spider.clientWidth / 2);

  if (e.target !== wall) {
    return;
  }

  spider.style.left = (e.clientX < minLeft)
    ? 0 + 'px'
    : Math.min(e.clientX - minLeft, maxLeft) + 'px';

  spider.style.top = (e.clientY < minTop)
    ? 0 + 'px'
    : Math.min(e.clientY - minTop, maxTop) + 'px';
});
