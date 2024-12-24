'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const coordsWall = wall.getBoundingClientRect();

document.addEventListener('click', (e) => {
  const coordX = e.pageX - coordsWall.left - 25;
  const coordY = e.pageY - coordsWall.top - 25;

  if (coordX > coordsWall.width || coordX < 0) {
    return;
  }

  if (coordY > coordsWall.height || coordY < 0) {
    return;
  }

  spider.style.transform = `translate(${coordX}px, ${coordY}px)`;
});
