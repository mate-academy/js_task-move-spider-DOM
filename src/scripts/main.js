'use strict';

document.addEventListener('click', e => {
  const wall = e.target.closest('.wall');
  const spider = document.querySelector('.spider');

  if (wall) {
    const wallHeight = wall.clientHeight;
    const wallWidth = wall.clientWidth;
    const spiderSize = spider.clientWidth;
    const spiderCenter = spiderSize / 2;

    spider.style.top = (e.offsetY < spiderCenter)
      ? `0px`
      : (e.offsetY + spiderCenter > wallHeight)
        ? `${wallHeight - spiderSize}px`
        : `${e.offsetY - spiderCenter}px`;

    spider.style.left = (e.offsetX < spiderCenter)
      ? `0px`
      : (e.offsetX + spiderCenter > wallWidth)
        ? `${wallWidth - spiderSize}px`
        : `${e.offsetX - spiderCenter}px`;
  }
});
