'use strict';

document.addEventListener('click', e => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const coordinateMouseX = e.offsetX;
  const coordinateMouseY = e.offsetY;

  const widthWall = e.clientX;
  const hightWall = e.clientY;

  wall.style.position = 'reletive';
  spider.style.position = 'absolute';

  console.log(e);

  const widthSpider = getComputedStyle(spider);
  const halfWidthSpider = parseFloat(widthSpider.width) / 2;

  if (coordinateMouseX >= widthWall) {
    spider.style.left = widthWall;
  } else {
    spider.style.left = `${coordinateMouseX - halfWidthSpider}px`;
  }

  if (coordinateMouseY >= hightWall) {
    spider.style.hight = hightWall;
  } else {
    spider.style.top = `${coordinateMouseY - halfWidthSpider}px`;
  }
});
