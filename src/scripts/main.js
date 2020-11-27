'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (events) => {
  const containerPosition = wall.getBoundingClientRect();
  const wallX = containerPosition.x + wall.clientLeft;
  const wallY = containerPosition.y + wall.clientTop;
  const spiderWidth = spider.offsetWidth / 2;
  const spiderHeight = spider.offsetHeight / 2;

  let coordinateХ = events.clientX - wallX - spiderWidth;
  let coordinateY = events.clientY - wallY - spiderHeight;

  const x = wall.clientWidth - spider.offsetWidth;
  const y = wall.clientHeight - spider.offsetHeight;

  coordinateY = coordinateY < 0 ? 0 : coordinateY;
  coordinateY = coordinateY > y ? y : coordinateY;

  coordinateХ = coordinateХ < 0 ? 0 : coordinateХ;
  coordinateХ = coordinateХ > x ? x : coordinateХ;

  spider.style.top = coordinateY + 'px';
  spider.style.left = coordinateХ + 'px';
});
