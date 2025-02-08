'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (event) => {
  const rect = wall.getBoundingClientRect();

  const borderWidth = wall.clientLeft;
  const borderHeight = wall.clientTop;

  const resetX = rect.x + borderWidth + spider.width / 2;
  const resetY = rect.y + borderHeight + spider.height / 2;

  let posX = event.clientX - resetX;
  let posY = event.clientY - resetY;

  posX = Math.max(
    0,
    Math.min(posX, rect.width - borderWidth * 2 - spider.width),
  );

  posY = Math.max(
    0,
    Math.min(posY, rect.height - borderHeight * 2 - spider.height),
  );

  spider.style.left = `${posX}px`;
  spider.style.top = `${posY}px`;
});
