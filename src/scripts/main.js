'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const wallCoords = getCoords(wall);

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const borderLeft = parseInt(getComputedStyle(wall).borderLeftWidth);
  const borderTop = parseInt(getComputedStyle(wall).borderTopWidth);

  // check if the user's click is out of the wall boundaries
  if (
    e.clientX < wallCoords.left ||
    e.clientX > wallCoords.right ||
    e.clientY < wallCoords.top ||
    e.clientY > wallCoords.bottom
  ) {
    return;
  }

  let newSpirderCoordX =
    e.clientX - wallCoords.left - spiderWidth / 2 - borderLeft;
  let newSpirderCoordY =
    e.clientY - wallCoords.top - spiderHeight / 2 - borderTop;

  // restrict spider coords so it does not goes out of the wall boundaries
  newSpirderCoordX = Math.max(
    0,
    Math.min(newSpirderCoordX, wall.clientWidth - spiderWidth),
  );

  newSpirderCoordY = Math.max(
    0,
    Math.min(newSpirderCoordY, wall.clientHeight - spiderHeight),
  );

  spider.style.left = newSpirderCoordX + 'px';
  spider.style.top = newSpirderCoordY + 'px';
});

function getCoords(elem) {
  const box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}
