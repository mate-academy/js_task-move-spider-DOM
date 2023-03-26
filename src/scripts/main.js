'use strict';

document.addEventListener('click', e => {
  e.preventDefault();

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!(e.target.closest('.wall'))) {
    return;
  }

  let coordSpiderY = e.offsetY - spider.clientHeight / 2;
  let coordSpiderX = e.offsetX - spider.clientWidth / 2;

  const maxWidth = wall.clientWidth - spider.clientWidth;
  const maxHeight = wall.clientHeight - spider.clientHeight;

  if (coordSpiderX < 0) {
    coordSpiderX = 0;
  }

  if (coordSpiderY < 0) {
    coordSpiderY = 0;
  }

  if (coordSpiderX > maxWidth) {
    coordSpiderX = maxWidth;
  }

  if (coordSpiderY > maxHeight) {
    coordSpiderY = maxHeight;
  }

  spider.style.top = `${coordSpiderY}px`;
  spider.style.left = `${coordSpiderX}px`;
});
