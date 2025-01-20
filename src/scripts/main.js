'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  // write code here

  if (e.x < wall.offsetLeft || e.x > wall.offsetLeft + 420) {
    return;
  }

  if (e.y < wall.offsetTop || e.y > wall.offsetTop + 420) {
    return;
  }

  const coord = (c) => {
    if (c < 0) {
      return 25;
    }

    if (c <= 25) {
      return c + 25;
    }

    if (c >= 400) {
      return 400 - 25;
    }

    return c - 10;
  };
  const y = coord(e.layerY);
  const x = coord(e.layerX);

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
  spider.style.transform = 'translate(-50%, -50%)';
});
