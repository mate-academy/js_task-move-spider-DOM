'use strict';

const getNewPositionSpider = (
  clientWallSizes,
  clientWallCordinates,
  sizesSpiderOnlyContent,
  sizesWallOnlyContent,
  eventClientCordinates,
) => {
  const borderWallOneSide = (clientWallSizes - sizesWallOnlyContent) / 2;
  const maxContentNeedForSpider = sizesWallOnlyContent - sizesSpiderOnlyContent;
  const halfSizesSpider = sizesSpiderOnlyContent / 2;
  const relativePositionOnwall =
    eventClientCordinates - clientWallCordinates - borderWallOneSide;

  const newPositionSpider = relativePositionOnwall - halfSizesSpider;

  if (newPositionSpider > maxContentNeedForSpider) {
    return maxContentNeedForSpider;
  }

  return newPositionSpider > 0 ? newPositionSpider : 0;
};

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const clientWall = wall.getBoundingClientRect();

  if (wall === e.target) {
    spider.style.top = `${getNewPositionSpider(
      clientWall.height,
      clientWall.y,
      spider.clientHeight,
      wall.clientHeight,
      e.clientY,
    )}px`;

    spider.style.left = `${getNewPositionSpider(
      clientWall.width,
      clientWall.x,
      spider.clientWidth,
      wall.clientWidth,
      e.clientX,
    )}px`;
  }
});
