'use strict';

const wall = document.querySelector('.wall');

// eslint-disable-next-line no-shadow
wall.addEventListener('click', event => {
  const spider = document.querySelector('.spider');
  const lengtToWallX = wall.getBoundingClientRect().x;
  const lengtToWallY = wall.getBoundingClientRect().y;
  const ignoreLeft = wall.clientLeft + spider.offsetWidth / 2;
  const ignoreTop = wall.clientTop + spider.offsetHeight / 2;
  let coordsLeft = event.clientX - lengtToWallX - ignoreLeft;
  let coordsTop = event.clientY - lengtToWallY - ignoreTop;

  if (coordsTop < 0) {
    coordsTop = 0;
  }

  if (coordsLeft < 0) {
    coordsLeft = 0;
  }

  if (coordsLeft + spider.clientWidth > wall.clientWidth) {
    coordsLeft = wall.clientWidth - spider.clientWidth;
  }

  if (coordsTop + spider.clientHeight > wall.clientHeight) {
    coordsTop = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = coordsLeft + 'px';
  spider.style.top = coordsTop + 'px';
});
