'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  let spiderX = e.offsetX - spider.clientWidth / 2;
  let spiderY = e.offsetY - spider.clientHeight / 2;

  const maxCoordX = wall.clientWidth - spider.clientWidth;
  const maxCoordY = wall.clientHeight - spider.clientHeight;

  if (e.target !== wall) {
    return;
  }

  spiderX = spiderX < 0 ? 0 : spiderX;
  spiderX = spiderX > maxCoordX ? maxCoordX : spiderX;

  spiderY = spiderY < 0 ? 0 : spiderY;
  spiderY = spiderY > maxCoordY ? maxCoordY : spiderY;

  spider.style.top = `${spiderY}px`;
  spider.style.left = `${spiderX}px`;
});
