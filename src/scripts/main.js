'use strict';

document.addEventListener('click', event => {
  const wall = event.target.closest('.wall');

  if (!wall) {
    return;
  }

  const spider = document.querySelector('.spider');
  const leftEdge = wall.offsetLeft + wall.clientLeft;
  const topEdge = wall.offsetTop + wall.clientTop;

  const positionX = event.clientX - leftEdge - spider.offsetWidth / 2;
  const positionY = event.clientY - topEdge - spider.offsetHeight / 2;

  const spiderX = wall.clientHeight - spider.offsetHeight;
  const spiderY = wall.clientWidth - spider.offsetWidth;

  function setPosition(coord, spiderPosition) {
    if (coord < 0) {
      return 0;
    }

    if (coord > spiderPosition) {
      return spiderPosition;
    }

    return coord;
  }

  spider.style.left = `${setPosition(positionX, spiderX)}px`;
  spider.style.top = `${setPosition(positionY, spiderY)}px`;
});
