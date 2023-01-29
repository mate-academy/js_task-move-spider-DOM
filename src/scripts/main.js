'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  let coordinateX = parseFloat(e.offsetY - spider.clientHeight / 2);

  let coordinateY = parseFloat(e.offsetX - spider.clientWidth / 2);

  const coordinateMax = parseFloat(wall.clientWidth - spider.clientWidth);

  if (e.target.className !== 'wall') {
    return;
  }

  if (coordinateX < 0) {
    coordinateX = 0;
  }

  if (coordinateY < 0) {
    coordinateY = 0;
  }

  if (coordinateX > coordinateMax) {
    coordinateX = coordinateMax;
  }

  if (coordinateY > coordinateMax) {
    coordinateY = coordinateMax;
  }

  spider.style.top = `${coordinateX}px`;

  spider.style.left = `${coordinateY}px`;
});
