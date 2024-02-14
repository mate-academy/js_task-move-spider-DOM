'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');

  if (wall) {
    const spider = wall.querySelector('.spider');

    const moveSpider = (e) => {
      const coordXOnWall = e.clientX - wall.offsetLeft - wall.clientLeft;
      const coordYOnWall = e.clientY - wall.offsetTop - wall.clientTop;

      let leftPosSpider = coordXOnWall - spider.offsetWidth / 2;
      let topPosSpider = coordYOnWall - spider.offsetHeight / 2;

      if (coordYOnWall < spider.offsetHeight / 2) {
        topPosSpider = 0;
      }

      if (coordXOnWall < spider.offsetWidth / 2) {
        leftPosSpider = 0;
      }

      if (coordXOnWall > wall.clientWidth - spider.offsetWidth / 2) {
        leftPosSpider = wall.clientWidth - spider.offsetWidth;
      }

      if (coordYOnWall > wall.clientHeight - spider.offsetHeight / 2) {
        topPosSpider = wall.clientHeight - spider.offsetHeight;
      }

      const spiderStyles = `top: ${topPosSpider}px;left: ${leftPosSpider}px`;

      spider.style.cssText = spiderStyles;
    };

    wall.addEventListener('click', (e) => moveSpider(e));
  }
});
