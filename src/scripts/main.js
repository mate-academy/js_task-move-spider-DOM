'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const rectWall = wall.getBoundingClientRect();
  const coordX = e.clientX - rectWall.x;
  const coordY = e.clientY - rectWall.y;

  if (
    coordX > 0 &&
    coordX < rectWall.width &&
    coordY > 0 &&
    coordY < rectWall.height
  ) {
    if (coordX > rectWall.width - 10 - spider.offsetWidth / 2) {
      spider.style.left =
        Math.ceil(rectWall.width - 20 - spider.offsetWidth) + 'px';
    } else if (coordX < spider.offsetWidth / 2 + 10) {
      spider.style.left = '0px';
    } else {
      spider.style.left = coordX - 10 - spider.offsetWidth / 2 + 'px';
    }

    if (coordY > rectWall.height - 10 - spider.offsetHeight / 2) {
      spider.style.top =
        Math.ceil(rectWall.height - 20 - spider.offsetHeight) + 'px';
    } else if (coordY < spider.offsetHeight / 2 + 10) {
      spider.style.top = '0px';
    } else {
      spider.style.top = coordY - 10 - spider.offsetHeight / 2 + 'px';
    }
  }
});
