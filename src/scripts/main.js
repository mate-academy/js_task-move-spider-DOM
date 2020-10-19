'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const leftEdge = wall.offsetLeft + wall.clientLeft;
const topEdge = wall.offsetTop + wall.clientTop;
const rightMaxPosition = wall.clientWidth - spider.clientWidth;
const bottomMaxPosition = wall.clientHeight - spider.clientHeight;

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  let xPosition = e.clientX - leftEdge - spider.clientWidth / 2;

  let yPosition = e.clientY - topEdge - spider.clientHeight / 2;

  if (xPosition < 0) {
    xPosition = 0;
  }

  if (xPosition > rightMaxPosition) {
    xPosition = rightMaxPosition;
  }

  if (yPosition < 0) {
    yPosition = 0;
  }

  if (yPosition > bottomMaxPosition) {
    yPosition = bottomMaxPosition;
  }

  spider.style.left = `${xPosition}px`;
  spider.style.top = `${yPosition}px`;
});
