'use strict';

const spider = document.querySelector('.spider');
const spiderW = spider.clientWidth;
const spiderH = spider.clientHeight;
const wall = document.querySelector('.wall');

function finalizeCoords(coord, spiderSize, max) {
  let result = coord;

  if (coord + spiderSize > max) {
    result = max - spiderSize;
  } else if (coord < 0) {
    result = 0;
  }

  return result;
}

document.addEventListener('click', e => {
  if (!e.target.matches('.wall')) {
    return;
  }

  const spiderX = e.clientX - wall.getBoundingClientRect().x
    + window.pageXOffset - spiderW / 2 - wall.clientLeft;

  const spiderY = e.clientY - wall.getBoundingClientRect().y
    + window.pageYOffset - spiderH / 2 - wall.clientTop;

  spider.style.left = `${finalizeCoords(spiderX, spiderW, wall.clientWidth)}px`;
  spider.style.top = `${finalizeCoords(spiderY, spiderH, wall.clientHeight)}px`;
});
