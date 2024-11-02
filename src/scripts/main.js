'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target === wall) {
    let x = e.offsetX - spider.offsetWidth / 2;
    let y = e.offsetY - spider.offsetHeight / 2;

    const restrictPosition = (axis, max) => {
      if (axis < 0) {
        return 0;
      }

      if (axis > max) {
        return max;
      }

      return axis;
    };

    x = restrictPosition(x, wall.clientWidth - spider.clientWidth);
    y = restrictPosition(y, wall.clientHeight - spider.clientHeight);

    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  }
});
