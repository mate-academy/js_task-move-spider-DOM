'use strict';

const spiderItem = document.querySelector('.spider');
const wallItem = document.querySelector('.wall');

wallItem.addEventListener('click', event => {
  let coordX = event.offsetX - spiderItem.offsetWidth / 2;
  let coordY = event.offsetY - spiderItem.offsetHeight / 2;

  if (coordX < 0) {
    coordX = 0;
  }

  if (coordX > wallItem.clientWidth - spiderItem.offsetWidth) {
    coordX = wallItem.clientWidth - spiderItem.offsetWidth;
  }

  if (coordY < 0) {
    coordY = 0;
  }

  if (coordY > wallItem.clientHeight - spiderItem.offsetHeight) {
    coordY = wallItem.clientHeight - spiderItem.offsetHeight;
  }

  spiderItem.style.left = coordX + 'px';
  spiderItem.style.top = coordY + 'px';
});
