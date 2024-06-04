'use strict';

const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');

  if (wall) {
    const { width: spiderWidth, height: spiderHeight } =
      spider.getBoundingClientRect();

    const { width: wallWidth, height: wallHeight } =
      wall.getBoundingClientRect();
    const { borderWidth } = getComputedStyle(wall);

    const floatBorderWidth = parseFloat(borderWidth);

    let getTopPosition = e.offsetY - spiderHeight / 2;
    let getSidePosition = e.offsetX - spiderWidth / 2;

    const maxTopPosition = wallHeight - spiderHeight - floatBorderWidth * 2;

    const maxSidePosition = wallWidth - spiderWidth - floatBorderWidth * 2;

    if (getSidePosition < 0) {
      getSidePosition = 0;
    }

    if (getTopPosition > maxTopPosition) {
      getTopPosition = maxTopPosition;
    }

    if (getSidePosition > maxSidePosition) {
      getSidePosition = maxSidePosition;
    }

    if (getTopPosition < 0) {
      getTopPosition = 0;
    }

    spider.style.top = getTopPosition + 'px';
    spider.style.left = getSidePosition + 'px';
  }
});
