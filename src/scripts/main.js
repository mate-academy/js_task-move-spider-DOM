'use strict';

document.addEventListener('click', event => {
  if (!event.target.closest('.wall')) {
    return;
  }

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallCoordinate = wall.getBoundingClientRect();

  console.log(event);

  let coordX = event.clientX - wallCoordinate.x - wall.clientLeft - spider.clientWidth / 2;
  let coordY = event.clientY - wallCoordinate.y - wall.clientTop - spider.clientHeight / 2;

  if (coordX < 0) {
    coordX = 0;
  }

  if (coordY < 0) {
    coordY = 0;
  }

  if (coordX + spider.clientWidth > wall.clientWidth) {
    coordX = wall.clientWidth - spider.clientWidth;
  }

  if (coordY + spider.clientHeight > wall.clientHeight) {
    coordY = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${coordX}px`;
  spider.style.top = `${coordY}px`;
});
