'use strict';

const spider = document.querySelector('.spider');
const area = document.querySelector('.wall');

area.addEventListener('click', e => {
  const areaCoords = area.getBoundingClientRect();
  const spiderW = spider.clientWidth;
  const spiderH = spider.clientHeight;
  const Y = e.clientY - areaCoords.top - area.clientTop - spiderH / 2;
  const X = e.clientX - areaCoords.left - area.clientLeft - spiderW / 2;

  const myTop = definition(Y, spiderH, area.clientHeight);
  const myLeft = definition(X, spiderW, area.clientWidth);

  spider.style.cssText = `
  top: ${myTop}px;
  left: ${myLeft}px;
  `;
});

function definition(coord, direction, method) {
  let result = coord;

  if (coord + direction > method) {
    result = method - direction;
  } else if (coord < 0) {
    result = 0;
  }

  return result;
}
