'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const wallSize = wall.clientWidth;
  const spider = document.querySelector('.spider');

  wall.addEventListener('click', (occasion) => {
    let CoordinateX = occasion.offsetX;
    let CoordinateY = occasion.offsetY;
    const halfSpiderWidth = spider.clientWidth / 2;

    if (CoordinateX >= wallSize - halfSpiderWidth) {
      CoordinateX = wallSize - halfSpiderWidth;
    } else if (CoordinateX < halfSpiderWidth) {
      CoordinateX = halfSpiderWidth;
    }

    if (CoordinateY >= wallSize - halfSpiderWidth) {
      CoordinateY = wallSize - halfSpiderWidth;
    } else if (CoordinateY < halfSpiderWidth) {
      CoordinateY = halfSpiderWidth;
    }
    spider.style.left = CoordinateX - halfSpiderWidth + 'px';
    spider.style.top = CoordinateY - halfSpiderWidth + 'px';
  });
});
