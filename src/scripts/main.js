'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const coordsX = e.clientX;
  const coordsY = e.clientY;

  let leftPos = (coordsX - wall.offsetLeft) - wall.clientLeft
    - spider.width / 2;
  let topPos = (coordsY - wall.offsetTop) - wall.clientTop
    - spider.height / 2;

  if (coordsY < wall.getBoundingClientRect().top
    || coordsY > wall.getBoundingClientRect().bottom) {
    return;
  }

  if (coordsX < wall.getBoundingClientRect().left
    || coordsX > wall.getBoundingClientRect().right) {
    return;
  }

  if (topPos < 0) {
    topPos = 0;
  }

  if (topPos + spider.height > wall.clientHeight) {
    topPos = wall.clientHeight - spider.height;
  }

  if (leftPos < 0) {
    leftPos = 0;
  }

  if (leftPos + spider.width > wall.clientWidth) {
    leftPos = wall.clientWidth - spider.width;
  }

  spider.style.top = topPos + 'px';
  spider.style.left = leftPos + 'px';
});
