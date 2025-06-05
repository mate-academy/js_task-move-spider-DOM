'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const sizeWall = wall.getBoundingClientRect();
  const sizeSpider = spider.getBoundingClientRect();

  const spiderWidth = sizeSpider.width;
  const spiderHeight = sizeSpider.height;

  let newX = e.clientX - sizeWall.left - spiderWidth / 2;
  let newY = e.clientY - sizeWall.top - spiderHeight / 2;

  newX = Math.max(0, Math.min(newX, sizeWall.width - spiderWidth));
  newY = Math.max(0, Math.min(newY, sizeWall.height - spiderHeight));

  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
