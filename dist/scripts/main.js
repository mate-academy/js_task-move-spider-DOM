'use strict';

function unit(field) {
  const spider = field.querySelector('.spider');
  const maxX = field.clientWidth - spider.offsetWidth;
  const maxY = field.clientHeight - spider.offsetHeight;

  function callback(value) {
    const fieldPosition = field.getBoundingClientRect();
    const fieldX = fieldPosition.left + field.clientLeft;
    const fieldY = fieldPosition.top + field.clientTop;

    let x = value.clientX - fieldX - spider.offsetWidth / 2;
    let y = value.clientY - fieldY - spider.offsetHeight / 2;

    if (x < 0) {
      x = 0;
    }

    if (x > maxX) {
      x = maxX;
    }

    if (y < 0) {
      y = 0;
    }

    if (y > maxY) {
      y = maxY;
    }

    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  }

  field.addEventListener('click', callback);
}

unit(document.querySelector('.wall'));
