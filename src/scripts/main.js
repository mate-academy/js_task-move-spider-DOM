'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!e.target.closest('.wall') || e.target === spider) {
    return;
  }

  let coordX = e.offsetX - (spider.clientWidth / 2);
  let coordY = e.offsetY - (spider.clientHeight / 2);

  const topEdge = wall.clientHeight - spider.clientHeight;
  const leftEdge = wall.clientWidth - spider.clientWidth;

  if (coordX < 0) {
    coordX = 0;
  }

  if (coordY < 0) {
    coordY = 0;
  }

  if (coordY > topEdge) {
    coordY = topEdge;
  }

  if (coordX > leftEdge) {
    coordX = leftEdge;
  }

  spider.style.top = `${coordY}px`;
  spider.style.left = `${coordX}px`;
});
