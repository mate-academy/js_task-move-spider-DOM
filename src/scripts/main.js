'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  if (!e.target.classList.contains('wall')) {
    return;
  }

  const x = e.offsetX - (spider.clientWidth / 2);
  const y = e.offsetY - (spider.clientHeight / 2);
  const maxPointX = wall.clientWidth - spider.clientWidth;
  const maxPointY = wall.clientHeight - spider.clientHeight;

  function getCoords(coords, movePoint) {
    if (coords < 0) {
      return 0;
    }

    if (coords > movePoint) {
      return movePoint;
    }

    return coords;
  }

  spider.style.top = `${getCoords(y, maxPointY)}px`;
  spider.style.left = `${getCoords(x, maxPointX)}px`;
});
