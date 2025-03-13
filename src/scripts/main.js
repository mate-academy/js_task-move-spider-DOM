'use strict';

const wall = document.querySelector('.wall');

const spider = wall.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();

  const spiderWidth = spider.clientWidth / 2;
  const spiderHeight = spider.clientHeight / 2;

  let xCoordinate = e.clientX - rect.left - spiderWidth;
  let yCoordinate = e.clientY - rect.top - spiderHeight;

  xCoordinate = Math.max(
    0,
    Math.min(xCoordinate, rect.width - spider.clientWidth),
  );

  yCoordinate = Math.max(
    0,
    Math.min(yCoordinate, rect.height - spider.clientHeight),
  );

  spider.style.top = `${yCoordinate}px`;
  spider.style.left = `${xCoordinate}px`;
});
