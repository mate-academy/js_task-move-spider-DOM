'use strict';

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  const centerPosition = spider.clientWidth / 2;
  let topPosition = e.offsetY - centerPosition;
  let leftPosition = e.offsetX - centerPosition;

  if (e.offsetY < centerPosition) {
    topPosition = 0;
  }

  if (e.offsetY > wall.clientHeight - centerPosition) {
    topPosition = wall.clientHeight - spider.clientHeight;
  }

  if (e.offsetX < centerPosition) {
    leftPosition = 0;
  }

  if (e.offsetX > wall.clientWidth - centerPosition) {
    leftPosition = wall.clientWidth - spider.clientWidth;
  }

  spider.style.top = `${topPosition}px`;
  spider.style.left = `${leftPosition}px`;
});

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
