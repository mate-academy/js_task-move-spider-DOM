'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const spiderW = spider.clientWidth;
  const spiderH = spider.clientHeight;
  const wall = document.querySelector('.wall');

  if (!e.target.matches('.wall')) {
    return;
  }

  const spiderX = e.clientX - wall.getBoundingClientRect().x
    + window.pageXOffset - spiderW / 2 - wall.clientLeft;

  const spiderY = e.clientY - wall.getBoundingClientRect().y
    + window.pageYOffset - spiderH / 2 - wall.clientTop;

  function checkInside(coord, spiderSize, max) {
    let result = coord;

    if (coord + spiderSize > max) {
      result = max - spiderSize;
    } else if (coord < 0) {
      result = 0;
    }

    return result;
  }

  spider.style.left = `${checkInside(spiderX, spiderW, wall.clientWidth)}px`;
  spider.style.top = `${checkInside(spiderY, spiderH, wall.clientHeight)}px`;
});
