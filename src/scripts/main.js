'use strict';

document.addEventListener('click', e => {
  const fieldRef = document.querySelector('.wall');
  const spiderRef = document.querySelector('.spider');

  if (e.target.className !== 'wall') {
    return;
  }

  const widthLimit = fieldRef.clientWidth - spiderRef.clientWidth;
  const heigthLimit = fieldRef.clientHeight - spiderRef.clientHeight;
  const fieldCoords = fieldRef.getBoundingClientRect();

  let calculatedX = e.clientX - fieldCoords.left - fieldRef.clientLeft
    - spiderRef.clientWidth / 2;

  let calculatedY = e.clientY - fieldCoords.top - fieldRef.clientTop
    - spiderRef.clientHeight / 2;

  if (calculatedX < 0) {
    calculatedX = 0;
  }

  if (calculatedY < 0) {
    calculatedY = 0;
  }

  if (calculatedX > widthLimit) {
    calculatedX = widthLimit;
  }

  if (calculatedY > heigthLimit) {
    calculatedY = heigthLimit;
  }

  spiderRef.style.left = calculatedX + 'px';
  spiderRef.style.top = calculatedY + 'px';
});
