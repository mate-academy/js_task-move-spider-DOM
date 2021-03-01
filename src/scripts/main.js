'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const halfSpiderWidth = `${spider.clientWidth / 2}`;
const halfSpiderHeight = `${spider.clientHeight / 2}`;

function changePosition(xPosition, yPosition) {
  const coords = {};

  let horizontalPosition = xPosition;
  let verticalPosition = yPosition;

  if (horizontalPosition > wall.clientWidth - halfSpiderWidth) {
    horizontalPosition = wall.clientWidth - halfSpiderWidth;
  }

  if (horizontalPosition < halfSpiderWidth) {
    horizontalPosition = halfSpiderWidth;
  }

  if (verticalPosition > wall.clientHeight - halfSpiderHeight) {
    verticalPosition = wall.clientHeight - halfSpiderHeight;
  }

  if (verticalPosition < halfSpiderHeight) {
    verticalPosition = halfSpiderHeight;
  }

  coords.x = horizontalPosition;
  coords.y = verticalPosition;

  return coords;
}

wall.addEventListener('click', e => {
  if (e.target.className === 'spider') {
    return;
  }

  if (e.offsetX > wall.clientWidth || e.offsetX < 0) {
    return;
  }

  if (e.offsetY > wall.clientHeight || e.offsetY < 0) {
    return;
  }

  const coords = changePosition(e.offsetX, e.offsetY);

  spider.style.left = `${coords.x - halfSpiderWidth}px`;
  spider.style.top = `${coords.y - halfSpiderHeight}px`;
});
