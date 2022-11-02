'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallBorderTop = parseFloat(getComputedStyle(wall).borderTop);
  const wallBorderLeft = parseFloat(getComputedStyle(wall).borderLeft);

  const centeredY = spider.clientHeight / 2;
  const centeredX = spider.clientWidth / 2;

  let y = e.clientY - wall.offsetTop - wallBorderTop - centeredY;
  let x = e.clientX - wall.offsetLeft - wallBorderLeft - centeredX;

  const underTop = y < -centeredY;
  const overTop = y >= wall.clientHeight - centeredY;
  const underLeft = x < -centeredX;
  const overRight = x >= wall.clientWidth - centeredX;

  if (underTop || overTop || underLeft || overRight) {
    return;
  };

  if (y < 0) {
    y = 0;
  }

  if (x < 0) {
    x = 0;
  };

  if (y >= wall.clientHeight - spider.clientHeight) {
    y = wall.clientHeight - spider.clientHeight;
  }

  if (x >= wall.clientWidth - spider.clientWidth) {
    x = wall.clientWidth - spider.clientWidth;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
