'use strict';

document.addEventListener('click', e => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const spiderSize = getComputedStyle(spider).height;
  const wallSize = getComputedStyle(wall).height;
  const min = 0;
  const max = parseFloat(wallSize) - parseFloat(spiderSize);

  const coordinateX = e.layerX - spider.clientWidth / 2;
  const coordinateY = e.layerY - spider.clientHeight / 2;

  spider.style.left = coordinateX < min
    ? 0 : coordinateX > max ? max + 'px' : coordinateX + 'px';

  spider.style.top = coordinateY < min
    ? 0 : coordinateY > max ? max + 'px' : coordinateY + 'px';
});
