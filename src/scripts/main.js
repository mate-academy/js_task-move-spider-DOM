'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const topCoords = wall.offsetTop + wall.clientTop;
  const leftCoords = wall.offsetLeft + wall.clientLeft;
  let moveX = e.clientX - leftCoords - (spider.clientWidth / 2);
  let moveY = e.clientY - topCoords - (spider.clientHeight / 2);

  if (e.target !== wall) {
    return;
  }

  if (e.clientX - leftCoords > wall.clientWidth - (spider.clientWidth / 2)) {
    moveX = wall.clientWidth - spider.clientWidth;
  }

  if (e.clientY - topCoords > wall.clientHeight - (spider.clientHeight / 2)) {
    moveY = wall.clientHeight - spider.clientHeight;
  }

  spider.style.top = moveY + 'px';
  spider.style.left = moveX + 'px';
});
