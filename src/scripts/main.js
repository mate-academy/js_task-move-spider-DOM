'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const horizontalWallBorder = (wall.offsetWidth - wall.clientWidth) / 2;
const verticalWallBorder = (wall.offsetHeight - wall.clientHeight) / 2;
const rightMaxPosition = wall.clientWidth - spider.clientWidth;
const bottomMaxPosition = wall.clientHeight - spider.clientHeight;

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  let xPosition = e.clientX
  - wall.getBoundingClientRect().left
  - horizontalWallBorder
  - spider.clientWidth / 2;

  let yPosition = e.clientY
  - wall.getBoundingClientRect().top
  - verticalWallBorder
  - spider.clientHeight / 2;

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
