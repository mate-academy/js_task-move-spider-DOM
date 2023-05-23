'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  spider.style.pointerEvents = 'none';

  if (!wall.contains(e.target)) {
    return;
  }

  let coordinateX = e.offsetX - spider.clientWidth / 2;
  let coordinateY = e.offsetY - spider.clientHeight / 2;

  if (coordinateX < 0) {
    coordinateX = 0;
  }

  if (coordinateY < 0) {
    coordinateY = 0;
  }

  const maxHeight = wall.clientHeight - spider.clientHeight;
  const maxWidth = wall.clientWidth - spider.clientWidth;

  if (coordinateX > maxWidth) {
    coordinateX = maxWidth;
  }

  if (coordinateY > maxHeight) {
    coordinateY = maxHeight;
  }

  spider.style.left = `${coordinateX}px`;
  spider.style.top = `${coordinateY}px`;
});
