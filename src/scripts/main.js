'use strict';

function DestinationComponent(
  MouseComponentCoord, spiderComponent, fieldComponent) {
  const normalPosition = MouseComponentCoord - spiderComponent / 2;

  if (normalPosition <= 0) {
    return 0;
  }

  if (normalPosition >= fieldComponent - spiderComponent) {
    return fieldComponent - spiderComponent;
  }

  return normalPosition;
}

// function horizontalDestinationComponent(
//   horizMouseCoord, spiderWidth, fieldWidth) {
//   const normalPosition = horizMouseCoord - spiderWidth / 2;

//   if (normalPosition <= 0) {
//     return 0;
//   }

//   if (normalPosition >= fieldWidth - spiderWidth) {
//     return fieldWidth - spiderWidth;
//   }

//   return normalPosition;
// }

document.addEventListener('click', e => {
  if (!e.target.classList.contains('wall')) {
    return;
  }

  const spider = document.querySelector('.spider');
  const verticalPosition = DestinationComponent(
    e.offsetY, spider.clientHeight, e.target.clientHeight);
  const horizontalPosition = DestinationComponent(
    e.offsetX, spider.clientWidth, e.target.clientWidth);

  spider.style.top = `${verticalPosition}px`;
  spider.style.left = `${horizontalPosition}px`;
});
