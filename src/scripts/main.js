'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  // write code here
  const wallCoord = wall.getBoundingClientRect();
  const wallX = wallCoord.left + wall.clientLeft;
  const wallY = wallCoord.top + wall.clientTop;
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const maxX = wall.clientWidth - spiderWidth;
  const maxY = wall.clientHeight - spiderHeight;
  let newY = event.clientY - wallY - spiderHeight / 2;
  let newX = event.clientX - wallX - spiderWidth / 2;

  newX = newX > maxX ? maxX : newX;
  newX = newX < 0 ? 0 : newX;

  newY = newY > maxY ? maxY : newY;
  newY = newY < 0 ? 0 : newY;

  spider.style.top = newY + 'px';
  spider.style.left = newX + 'px';
});
