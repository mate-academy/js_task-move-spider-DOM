'use strict';

const body = document.body;
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallStyles = getComputedStyle(wall);
const wallBorderWidth = parseFloat(
  wallStyles.getPropertyValue('border-width'),
);
const toCenterSpiderWidth = spider.clientWidth / 2 + wallBorderWidth;
const toCenterSpiderHeight = spider.clientHeight / 2 + wallBorderWidth;

document.addEventListener('click', (e) => {
  const positionZero = 0 + 'px';

  if (e.target === body) {
    return;
  }

  spider.style.top = e.clientY - wall.offsetTop - toCenterSpiderHeight + 'px';
  spider.style.left = e.clientX - wall.offsetLeft - toCenterSpiderWidth + 'px';

  if (e.clientY < wall.offsetTop + toCenterSpiderHeight) {
    spider.style.top = positionZero;
  }

  if (e.clientY > wall.offsetTop - toCenterSpiderHeight + wall.clientHeight) {
    spider.style.top = 350 + 'px';
  }

  if (e.clientX < wall.offsetLeft + toCenterSpiderHeight) {
    spider.style.left = positionZero;
  }

  if (e.clientX > wall.offsetLeft - toCenterSpiderWidth + wall.clientWidth) {
    spider.style.left = 350 + 'px';
  }
});
