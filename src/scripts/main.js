'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target !== wall) {
    return;
  }

  const spiderX = e.offsetX - spider.offsetWidth / 2;
  const spiderY = e.offsetY - spider.offsetHeight / 2;

  spider.style.left = positionSpider(
    spiderX,
    wall.clientWidth,
    spider.offsetWidth) + 'px';

  spider.style.top = positionSpider(
    spiderY,
    wall.clientHeight,
    spider.offsetHeight) + 'px';

  function positionSpider(spiderCoords, wallSize, spiderSize) {
    if (spiderCoords < 0) {
      return 0;
    } else if (spiderCoords > (wallSize - spiderSize)) {
      return wallSize - spiderSize;
    }

    return spiderCoords;
  }
});
