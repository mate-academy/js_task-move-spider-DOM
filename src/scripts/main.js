'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const borderLeftWidth = parseInt(getComputedStyle(wall).borderLeftWidth);
  const borderRightWidth = parseInt(getComputedStyle(wall).borderRightWidth);
  const borderTopWidth = parseInt(getComputedStyle(wall).borderTopWidth);
  const borderBottomWidth = parseInt(getComputedStyle(wall).borderBottomWidth);
  const rect = wall.getBoundingClientRect();
  const spider = document.querySelector('.spider');
  const spiderHalfWidth = spider.clientWidth / 2;
  const spiderHalfHeight = spider.clientHeight / 2;

  if (!e.target.closest('.wall')) {
    return;
  }

  let posX = e.clientX - rect.left - borderLeftWidth - spiderHalfWidth;

  if (posX < 0) {
    posX = 0;
  } else if (posX + spider.clientWidth >= rect.width - borderRightWidth) {
    posX =
      rect.width - spider.clientWidth - borderLeftWidth - borderRightWidth;
  }

  let posY = e.clientY - rect.top - borderTopWidth - spiderHalfHeight;

  if (posY < 0) {
    posY = 0;
  } else if (posY + spider.clientHeight >= rect.height - borderBottomWidth) {
    posY =
      rect.height - spider.clientHeight - borderTopWidth - borderBottomWidth;
  }

  spider.style.left = `${posX}px`;
  spider.style.top = `${posY}px`;
});
