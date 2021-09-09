'use strict';

document.addEventListener('click', e => {
  const wall = e.target;

  const spider = document.querySelector('.spider');

  const heightSpider = parseFloat(getComputedStyle(spider).height);
  const widthSpider = parseFloat(getComputedStyle(spider).width);

  const heightWall = parseFloat(getComputedStyle(wall).height);
  const widthWall = parseFloat(getComputedStyle(wall).width);

  function createCursorPosition(sizeSpider, sizeWall, coordinateCursor) {
    let positionSpider;
    const minCursor = sizeSpider / 2;
    const maxCursor = sizeWall - (sizeSpider / 2);

    if (coordinateCursor < minCursor) {
      positionSpider = `0px`;
    } else if (coordinateCursor > maxCursor) {
      positionSpider = `${sizeWall - sizeSpider}px`;
    } else {
      positionSpider = `${coordinateCursor - (sizeSpider / 2)}px`;
    }

    return positionSpider;
  }

  if (wall.classList.contains('wall')) {
    spider.style.top
      = createCursorPosition(heightSpider, heightWall, e.offsetY);
    spider.style.left = createCursorPosition(widthSpider, widthWall, e.offsetX);
  }
});
