'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const position = e.target;

  if (!position.classList.contains('wall')) {
    return;
  }

  const positionX = e.offsetX - spider.offsetHeight / 2;
  const positionY = e.offsetY - spider.offsetWidth / 2;

  spider.style.left = positionX + 'px';
  spider.style.top = positionY + 'px';
});
