'use strict';

const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  let positionX = e.clientX - wall.offsetLeft - wall.clientLeft;
  let positionY = e.clientY - wall.offsetTop - wall.clientTop;

  if (positionX > wall.clientWidth - spider.offsetWidth / 2) {
    positionX = wall.clientWidth - spider.offsetWidth / 2;
  }

  if (positionY > wall.clientHeight - spider.offsetWidth / 2) {
    positionY = wall.clientHeight - spider.offsetWidth / 2;
  }

  if (positionX < spider.offsetWidth / 2) {
    positionX = spider.offsetWidth / 2;
  }

  if (positionY < spider.offsetWidth / 2) {
    positionY = spider.offsetHeight / 2;
  }

  spider.style.left = `${positionX - spider.offsetWidth / 2}px`;
  spider.style.top = `${positionY - spider.offsetHeight / 2}px`;
});
