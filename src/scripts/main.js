'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if ((wall.offsetWidth + wall.offsetLeft) < e.clientX
    || e.clientX < wall.offsetLeft) {
    return false;
  }

  if ((wall.offsetHeight + wall.offsetTop) < e.clientY
    || e.clientY < wall.offsetTop) {
    return false;
  }

  const coordinateTop = e.clientY - wall.offsetTop
    - wall.clientTop - spider.clientHeight / 2;

  const coordinateLeft = e.clientX - wall.offsetLeft
      - wall.clientLeft - spider.clientWidth / 2;

  spider.style.top = (coordinateTop < 0) ? 0 + 'px' : `${coordinateTop}px`;
  spider.style.left = (coordinateLeft < 0) ? 0 + 'px' : `${coordinateLeft}px`;

  spider.style.top = (coordinateTop + spider.clientHeight > wall.clientHeight)
    ? `${wall.clientHeight - spider.clientHeight}px`
    : spider.style.top;

  spider.style.left = (coordinateLeft + spider.clientWidth > wall.clientWidth)
    ? `${wall.clientWidth - spider.clientWidth}px`
    : spider.style.left;
});
