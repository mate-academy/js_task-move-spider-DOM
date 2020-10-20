'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  const spiderHalf = spider.offsetWidth / 2;
  const spiderSize = spiderHalf * 2;
  const coordsX = e.offsetX;
  const coordsY = e.offsetY;
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  let spiderCoordsX = coordsX - spiderHalf + 'px';
  let spiderCoordsY = coordsY - spiderHalf + 'px';

  if (coordsX <= spiderHalf) {
    spiderCoordsX = '0';
  }

  if (coordsX >= wallWidth - spiderHalf) {
    spiderCoordsX = wallWidth - spiderSize + 'px';
  }

  if (coordsY <= spiderHalf) {
    spiderCoordsY = '0';
  }

  if (coordsY >= wallHeight - spiderHalf) {
    spiderCoordsY = wallHeight - spiderSize + 'px';
  }

  spider.style.left = spiderCoordsX;
  spider.style.top = spiderCoordsY;
});
