'use strict';

document.addEventListener('click', e => {
  const target = e.target.closest('.wall');

  if (!target) {
    return;
  }

  const wallElement = document.querySelector('.wall');
  const spiderElement = document.querySelector('.spider');

  const maxXvalue = wallElement.clientWidth - spiderElement.clientWidth;
  const maxYvalue = wallElement.clientHeight - spiderElement.clientHeight;

  let moveToX = e.offsetX - spiderElement.width / 2;
  let moveToY = e.offsetY - spiderElement.height / 2;

  if (moveToX < 0) {
    moveToX = 0;
  }

  if (moveToX > maxXvalue) {
    moveToX = maxXvalue;
  }

  if (moveToY < 0) {
    moveToY = 0;
  }

  if (moveToY > maxYvalue) {
    moveToY = maxYvalue;
  }

  spiderElement.style.left = `${moveToX}px`;
  spiderElement.style.top = `${moveToY}px`;
});
