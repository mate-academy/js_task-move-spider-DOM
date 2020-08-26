'use strict';

document.addEventListener('click', event => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const clickX = event.offsetX - spider.offsetHeight / 2;
  const clickY = event.offsetY - spider.offsetWidth / 2;

  if (event.target !== wall) {
    return;
  }

  function setPosition(spiderSize, wallSize, position) {
    if (position < 0) {
      return 0;
    }

    if ((wallSize - spiderSize) < position) {
      return wallSize - spiderSize;
    }

    return position;
  }

  spider.style.top = setPosition(
    spider.offsetHeight,
    wall.clientHeight,
    clickY) + 'px';

  spider.style.left = setPosition(
    spider.offsetWidth,
    wall.clientWidth,
    clickX) + 'px';
});
