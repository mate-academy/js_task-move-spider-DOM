'use strict';

document.addEventListener('click', event => {
  const wall = event.target.closest('.wall');

  if (!wall) {
    return;
  }

  const spider = document.querySelector('.spider');
  const leftEdge = wall.offsetLeft + wall.clientLeft;
  const topEdge = wall.offsetTop + wall.clientTop;

  let positionX = event.clientX - leftEdge - spider.offsetWidth / 2;
  let positionY = event.clientY - topEdge - spider.offsetHeight / 2;

  if (positionX < 0) {
    positionX = 0;
  }

  if (positionX > wall.clientWidth - spider.offsetWidth) {
    positionX = wall.clientWidth - spider.offsetWidth;
  }

  if (positionY < 0) {
    positionY = 0;
  }

  if (positionY > wall.clientHeight - spider.offsetHeight) {
    positionY = wall.clientHeight - spider.offsetHeight;
  }

  spider.style.left = `${positionX}px`;
  spider.style.top = `${positionY}px`;
});
