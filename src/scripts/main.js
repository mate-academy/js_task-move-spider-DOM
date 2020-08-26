'use strict';

document.addEventListener('click', (event) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (event.target !== wall) {
    return;
  }

  let destinationX = event.offsetX - spider.offsetWidth / 2;
  let destinationY = event.offsetY - spider.offsetHeight / 2;

  if (destinationX < 0) {
    destinationX = 0;
  } else if (destinationX > wall.clientWidth - spider.offsetWidth) {
    destinationX = wall.clientWidth - spider.offsetWidth;
  };

  if (destinationY < 0) {
    destinationY = 0;
  } else if (destinationY > wall.clientHeight - spider.offsetHeight) {
    destinationY = wall.clientHeight - spider.offsetHeight;
  };

  spider.style.top = `${destinationY}px`;
  spider.style.left = `${destinationX}px`;
});
