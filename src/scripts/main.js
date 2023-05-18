'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const maxHeight = wall.clientHeight - spider.clientHeight;
const maxWidth = wall.clientWidth - spider.clientWidth;

document.addEventListener('click', e => {
  const wallSquare = e.target.closest('.wall');

  if (!wallSquare) {
    return;
  }

  const wallCoords = wall.getBoundingClientRect();

  let yPosition
   = e.clientY - wallCoords.top - wall.clientTop - (spider.clientHeight / 2);
  let xPosition
   = e.clientX - wallCoords.left - wall.clientLeft - (spider.clientWidth / 2);

  if (yPosition > maxHeight) {
    yPosition = maxHeight;
  }

  if (xPosition > maxWidth) {
    xPosition = maxWidth;
  }

  if (xPosition < 0) {
    xPosition = 0;
  }

  if (yPosition < 0) {
    yPosition = 0;
  }

  spider.style.top = yPosition + 'px';
  spider.style.left = xPosition + 'px';
});
