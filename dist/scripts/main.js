'use strict';

function init(field) {
  const spider = field.querySelector('.spider');

  field.addEventListener('click', e => {
    const fieldCoords = field.getBoundingClientRect();
    const fieldX = fieldCoords.x + field.clientLeft;
    const fieldY = fieldCoords.y + field.clientTop;
    let x = e.clientX - fieldX - spider.offsetWidth / 2;
    let y = e.clientY - fieldY - spider.offsetHeight / 2;
    const xMax = field.clientWidth - spider.offsetWidth;
    const yMax = field.clientHeight - spider.offsetHeight;

    if (x < 0) {
      x = 0;
    }

    if (x > xMax) {
      x = xMax;
    }

    if (y < 0) {
      y = 0;
    }

    if (y > yMax) {
      y = yMax;
    }

    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  });
}

init(document.querySelector('.wall'));
