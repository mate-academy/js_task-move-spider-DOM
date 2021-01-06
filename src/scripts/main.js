'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallBorder = wall.clientTop;

const spyderWidth = parseInt(spider.clientWidth);
const spyderHeight = parseInt(spider.clientHeight);
const wallWidth = parseInt(wall.clientWidth);
const wallHeight = parseInt(wall.clientHeight);

const distanceFromTop = wall.offsetTop;
const distanceFromLeft = wall.offsetLeft;

const translateCenter = spyderWidth / 2 + wallBorder;

document.addEventListener('click', e => {
  const item = e.target;

  if (!item.classList.contains('wall')) {
    return;
  }

  const mouseInsideWallX = e.clientX - distanceFromLeft;
  const mouseInsideWallY = e.clientY - distanceFromTop;

  spider.style.top = `${mouseInsideWallY - translateCenter}px`;
  spider.style.left = `${mouseInsideWallX - translateCenter}px`;

  if (mouseInsideWallX < spyderWidth / 2 + wallBorder) {
    spider.style.left = `0px`;
  }

  if (mouseInsideWallX >= wallWidth - spyderWidth / 2 + wallBorder) {
    spider.style.left = `${wallWidth - spyderWidth}px`;
  }

  if (mouseInsideWallY < spyderHeight / 2 + wallBorder) {
    spider.style.top = `0px`;
  }

  if (mouseInsideWallY >= wallHeight - spyderHeight / 2 + wallBorder) {
    spider.style.top = `${wallHeight - spyderHeight}px`;
  }
});
