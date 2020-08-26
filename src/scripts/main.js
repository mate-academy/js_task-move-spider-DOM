'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const spiderSize = spider.clientHeight;
const wallSize = wall.clientHeight;

document.addEventListener('click', event => {
  if (event.target !== wall) {
    return;
  };

  let x = event.offsetX - spiderSize / 2;
  let y = event.offsetY - spiderSize / 2;

  function countCollisionWall(param) {
    if (param > wallSize - spiderSize) {
      return wallSize - spiderSize;
    } else if (param < 0) {
      return 0;
    };

    return param;
  };

  x = countCollisionWall(x);
  y = countCollisionWall(y);

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
