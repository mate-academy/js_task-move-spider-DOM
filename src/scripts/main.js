'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  let cordX = e.offsetX - (spider.width / 2);
  let cordY = e.offsetY - (spider.height / 2);
  const width = wall.clientWidth - spider.clientWidth;
  const height = wall.clientHeight - spider.clientHeight;

  cordX = Math.max(0, cordX);
  cordX = Math.min(width, cordX);
  cordY = Math.max(0, cordY);
  cordY = Math.min(height, cordY);

  spider.style.left = `${cordX}px`;
  spider.style.top = `${cordY}px`;
});
