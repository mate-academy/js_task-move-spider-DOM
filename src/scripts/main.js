'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!e.target.closest('.wall')) {
    return;
  }

  let x = e.offsetX - spider.clientWidth / 2;
  let y = e.offsetY - spider.clientHeight / 2;

  const topEdge = wall.clientHeight - spider.clientHeight;
  const leftEdge = wall.clientWidth - spider.clientWidth;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > leftEdge) {
    x = leftEdge;
  }

  if (y > topEdge) {
    y = topEdge;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
