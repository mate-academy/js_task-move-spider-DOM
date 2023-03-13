'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const spiderWall = document.querySelector('.wall');
  const wallData = spiderWall.getBoundingClientRect();
  const clickableArea = e.target.closest('.wall');
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const xArea = spiderWall.clientWidth - spider.offsetWidth;
  const yArea = spiderWall.clientHeight - spider.offsetHeight;
  const supposedXForSpider = mouseX - wallData.x - spider.offsetWidth / 2;
  const supposedYForSpider = mouseY - wallData.y - spider.offsetHeight / 2;
  const newXForSpider = Math.min(Math.max(0, supposedXForSpider), xArea);
  const newYForSpider = Math.min(Math.max(0, supposedYForSpider), yArea);

  if (!clickableArea) {
    return;
  }

  spider.style.top = `${newYForSpider}px`;
  spider.style.left = `${newXForSpider}px`;
});
