'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  if (!e.target.classList.contains('wall')) {
    return;
  }

  let coordinatY = e.offsetY - spider.height / 2;
  let coordinatX = e.offsetX - spider.width / 2;

  const maxCoordinatX = wall.clientWidth - spider.width;
  const maxCoordinatY = wall.clientHeight - spider.height;

  if (coordinatX >= +maxCoordinatX) {
    coordinatX = +maxCoordinatX;
  }

  if (coordinatY >= +maxCoordinatY) {
    coordinatY = +maxCoordinatY;
  }

  if (coordinatX <= 0) {
    coordinatX = 0;
  }

  if (coordinatY <= 0) {
    coordinatY = 0;
  }

  spider.style.top = `${coordinatY}px`;
  spider.style.left = `${coordinatX}px`;
});
