'use strict';

function verticaDestinationComponent(
  vertMouseCoord, spiderHeight, fieldHeight) {
  const normalPosition = vertMouseCoord - spiderHeight / 2;

  if (normalPosition <= 0) {
    return 0;
  }

  if (normalPosition >= fieldHeight - spiderHeight) {
    return fieldHeight - spiderHeight;
  }

  return normalPosition;
}

function horizontalDestinationComponent(
  horizMouseCoord, spiderWidth, fieldWidth) {
  const normalPosition = horizMouseCoord - spiderWidth / 2;

  if (normalPosition <= 0) {
    return 0;
  }

  if (normalPosition >= fieldWidth - spiderWidth) {
    return fieldWidth - spiderWidth;
  }

  return normalPosition;
}

document.addEventListener('click', e => {
  if (e.target.classList.contains('wall')) {
    const spider = document.querySelector('.spider');
    const verticalPosition = verticaDestinationComponent(
      e.offsetY, spider.clientHeight, e.target.clientHeight);
    const horizontalPosition = horizontalDestinationComponent(
      e.offsetX, spider.clientWidth, e.target.clientWidth);

    spider.style.top = `${verticalPosition}px`;
    spider.style.left = `${horizontalPosition}px`;
  }
});
