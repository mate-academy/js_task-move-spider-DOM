'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const position = e.target;

  if (!position.classList.contains('wall')) {
    return;
  }

  let positionX = e.offsetX - spider.offsetWidth / 2;
  let positionY = e.offsetY - spider.offsetHeight / 2;

  if (positionX < 0) {
    positionX = 0;
  }

  if (positionY < 0) {
    positionY = 0;
  }

  if (positionX + spider.offsetWidth > wall.clientWidth) {
    positionX = wall.clientWidth - spider.offsetWidth;
  }

  if (positionY + spider.offsetHeight > wall.clientHeight) {
    positionY = wall.clientHeight - spider.offsetHeight;
  }

  spider.style.left = positionX + 'px';
  spider.style.top = positionY + 'px';
});
