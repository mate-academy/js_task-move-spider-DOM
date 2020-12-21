'use strict';

const spider = document.querySelector(`.spider`);
const wall = document.querySelector(`.wall`);

document.addEventListener('click', e => {
  if (e.target.className !== `wall`) {
    return;
  }

  const minX = 0;
  const minY = 0;
  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;
  let x = e.offsetX - spider.clientWidth / 2;
  let y = e.offsetY - spider.clientHeight / 2;

  x = x < minX ? 0 : x;
  y = y < minY ? 0 : y;
  x = x > maxX ? maxX : x;
  y = y > maxY ? maxY : y;

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
