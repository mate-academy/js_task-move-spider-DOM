'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const elementSpider = document.querySelector('.spider');

  if (e.target.className !== 'wall') {
    return;
  }

  let coordX = e.offsetX - parseFloat(elementSpider.clientWidth / 2);
  let coordY = e.offsetY - parseFloat(elementSpider.clientHeight / 2);

  const maxY = parseFloat(wall.clientHeight - elementSpider.clientHeight);
  const maxX = parseFloat(wall.clientWidth - elementSpider.clientWidth);

  if (coordX < 0) {
    coordX = 0;
  }

  if (coordX > maxX) {
    coordX = maxX;
  }

  if (coordY < 0) {
    coordY = 0;
  }

  if (coordY > maxY) {
    coordY = maxY;
  }

  elementSpider.style.left = `${coordX}px`;
  elementSpider.style.top = `${coordY}px`;
});
