'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const border = getComputedStyle(wall).borderWidth.slice(0, -2) * 2;
const styleW = wall.getBoundingClientRect();
const styleS = spider.getBoundingClientRect();

document.addEventListener('click', e => {
  let x = e.clientX - styleW.left - styleS.width / 2;
  let y = e.clientY - styleW.top - styleS.height / 2;
  const edgeX = styleW.width - styleS.width - border;
  const edgeY = styleW.height - styleS.height - border;

  x = x > edgeX
    ? edgeX
    : x < 0
      ? 0
      : x;

  y = y > edgeY
    ? edgeY
    : y < 0
      ? 0
      : y;

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
