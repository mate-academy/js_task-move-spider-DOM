'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');

  if (!(e.target.closest('.wall'))) {
    return;
  }

  const spider = document.querySelector('.spider');

  let x = e.offsetX - spider.clientWidth / 2;
  let y = e.offsetY - spider.clientHeight / 2;
  const maxWidth = wall.clientWidth - spider.clientWidth;
  const maxHeight = wall.clientHeight - spider.clientHeight;
  const correctCoord = 0;

  if (x < correctCoord) {
    x = correctCoord;
  }

  if (y < correctCoord) {
    y = correctCoord;
  }

  if (x > maxWidth) {
    x = maxWidth;
  }

  if (y > maxHeight) {
    y = maxHeight;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
