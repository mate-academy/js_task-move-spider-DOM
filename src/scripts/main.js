'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const targetX = e.offsetX - (spider.offsetWidth / 2);
  const targetY = e.offsetY - (spider.offsetHeight / 2);

  function fixOutBorder(coord, spiderSize, wallSize) {
    let result = coord;

    if (result < 0) {
      result = 0;
    } else if (result > wallSize - spiderSize) {
      result = wallSize - spiderSize;
    };

    return result;
  }

  const coordX = fixOutBorder(targetX, spider.offsetWidth, wall.clientWidth);
  const coordY = fixOutBorder(targetY, spider.offsetHeight, wall.clientHeight);

  spider.style.left = coordX + 'px';
  spider.style.top = coordY + 'px';
});
