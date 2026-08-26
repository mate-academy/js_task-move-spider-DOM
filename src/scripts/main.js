'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall.contains(e.target)) {
    return;
  }

  const clickX =
    e.target === spider ? e.offsetX + spider.offsetLeft : e.offsetX;
  const clickY = e.target === spider ? e.offsetY + spider.offsetTop : e.offsetY;

  let coordX = clickX - spider.clientWidth / 2;
  let coordY = clickY - spider.clientHeight / 2;

  if (coordX < 0) {
    coordX = 0;
  }

  if (coordX > wall.clientWidth - spider.clientWidth) {
    coordX = wall.clientWidth - spider.clientWidth;
  }

  if (coordY < 0) {
    coordY = 0;
  }

  if (coordY > wall.clientHeight - spider.clientHeight) {
    coordY = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${coordX}px`;
  spider.style.top = `${coordY}px`;
});
