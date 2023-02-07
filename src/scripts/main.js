'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target.className !== 'wall') {
    return;
  }

  let coordsX = e.offsetX - parseFloat(spider.clientWidth / 2);
  let coordsY = e.offsetY - parseFloat(spider.clientHeight / 2);

  const maxHeight = parseFloat(wall.clientHeight - spider.clientHeight);
  const maxWidth = parseFloat(wall.clientWidth - spider.clientWidth);

  if (coordsX < 0) {
    coordsX = 0;
  }

  if (coordsX > maxHeight) {
    coordsX = maxHeight;
  }

  if (coordsY < 0) {
    coordsY = 0;
  }

  if (coordsY > maxWidth) {
    coordsY = maxWidth;
  }

  spider.style.left = `${coordsX}px`;
  spider.style.top = `${coordsY}px`;
});
