'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const maxHeight = wall.clientHeight - spider.clientHeight;
  const maxWidth = wall.clientWidth - spider.clientWidth;

  spider.style.pointerEvents = 'none';

  if (!wall.contains(e.target)) {
    return;
  }

  let coordX = e.offsetX - spider.clientWidth / 2;
  let coordY = e.offsetY - spider.clientHeight / 2;

  if (coordX < 0) {
    coordX = 0;
  }

  if (coordX > maxWidth) {
    coordX = maxWidth;
  }

  if (coordY < 0) {
    coordY = 0;
  }

  if (coordY > maxHeight) {
    coordY = maxHeight;
  }

  spider.style.top = `${coordY}px`;
  spider.style.left = `${coordX}px`;
});
