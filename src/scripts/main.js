'use strict';

const clickElement = document.querySelector('.wall');

clickElement.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallSize = wall.getBoundingClientRect();
  const spiderSize = spider.getBoundingClientRect();

  const spiderWidth = spiderSize.width;
  const spiderHeight = spiderSize.width;

  const borderTh = parseInt(window.getComputedStyle(wall).borderWidth, 10);

  let topY = e.clientY - wallSize.top - borderTh - spiderWidth / 2;
  let left = e.clientX - wallSize.left - borderTh - spiderHeight / 2;

  const maxY = wallSize.height - spiderHeight - borderTh * 2;
  const maxX = wallSize.width - spiderWidth - borderTh * 2;

  if (topY < 0) {
    topY = 0;
  }

  if (left < 0) {
    left = 0;
  }

  if (topY > maxY) {
    topY = maxY;
  }

  if (left > maxX) {
    left = maxX;
  }

  spider.style.top = topY + 'px';
  spider.style.left = left + 'px';
});
