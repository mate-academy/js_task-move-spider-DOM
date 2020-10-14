'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const horizontalWallBorder = (wall.offsetWidth - wall.clientWidth) / 2;
  const verticalWallBorder = (wall.offsetHeight - wall.clientHeight) / 2;

  let xPosition = e.clientX
  - wall.getBoundingClientRect().left
  - horizontalWallBorder;

  let yPosition = e.clientY
  - wall.getBoundingClientRect().top
  - verticalWallBorder;

  if (xPosition < 0) {
    xPosition = 0;
  }

  if (yPosition < 0) {
    yPosition = 0;
  }

  if (xPosition > wall.clientWidth - spider.clientWidth) {
    xPosition = wall.clientWidth - spider.clientWidth;
  }

  if (yPosition > wall.clientHeight - spider.clientHeight) {
    yPosition = wall.clientHeight - spider.clientHeight;
  }

  if (e.target === wall) {
    spider.style.left = `${xPosition}px`;
    spider.style.top = `${yPosition}px`;
  }
});
