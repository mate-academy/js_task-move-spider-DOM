'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallPosition = wall.getBoundingClientRect();
  const wallX = wallPosition.left + wall.clientLeft;
  const wallY = wallPosition.top + wall.clientLeft;
  let coordinateX = e.clientX - wallX - spider.offsetWidth / 2;
  let coordinateY = e.clientY - wallY - spider.offsetHeight / 2;

  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;

  if (coordinateX < 0) {
    coordinateX = 0;
  } else if (coordinateX > maxX) {
    coordinateX = maxX;
  }

  if (coordinateY < 0) {
    coordinateY = 0;
  } else if (coordinateY > maxY) {
    coordinateY = maxY;
  }

  spider.style.top = `${coordinateY}px`;
  spider.style.left = `${coordinateX}px`;
});
