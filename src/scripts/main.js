'use strict';

document.addEventListener('click', (event) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  let x = event.clientX - wall.offsetLeft - wall.clientLeft
   - spider.clientWidth / 2;
  let y = event.clientY - wall.offsetTop - wall.clientTop
  - spider.clientHeight / 2;

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxy = wall.clientHeight - spider.clientHeight;

  if (x > maxX) {
    x = maxX;
  };

  if (y > maxy) {
    y = maxy;
  };

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (event.target !== wall) {
    return;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
