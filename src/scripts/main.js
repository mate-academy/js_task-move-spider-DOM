'use strict';

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const positionWall = wall.getBoundingClientRect();
  const spider = document.querySelector('.spider');
  const xposition = e.clientX - positionWall.x;
  const yposition = e.clientY - positionWall.y;
  const wallWidth = wall.offsetWidth;
  const wallHeight = wall.offsetHeight;
  const halfWidthSpider = spider.offsetWidth / 2;
  const halfHeightSpider = spider.offsetHeight / 2;
  const border = (wall.offsetWidth - wall.clientWidth) / 2;
  const minX = 0;
  const maxX = wall.clientWidth - spider.offsetWidth;
  const minY = 0;
  const maxY = wall.clientHeight - spider.offsetHeight;

  let scaleX =
    (wallWidth * xposition) / positionWall.width - halfWidthSpider - border;
  let scaleY =
    (wallHeight * yposition) / positionWall.height - halfHeightSpider - border;

  if (scaleX < minX) {
    scaleX = minX;
  }

  if (scaleX > maxX) {
    scaleX = maxX;
  }

  if (scaleY < minY) {
    scaleY = minY;
  }

  if (scaleY > maxY) {
    scaleY = maxY;
  }

  spider.style.left = scaleX + 'px';
  spider.style.top = scaleY + 'px';
});
