'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const wallCoords = wall.getBoundingClientRect();
  const clickX = e.clientX;
  const clickY = e.clientY;
  const spiderSize = {
    width: spider.clientWidth,
    height: spider.clientHeight,
  };

  const coordsSpider = {
    left: clickX - wallCoords.left - spider.clientWidth / 2,
    top: clickY - wallCoords.top - spider.clientHeight / 2,
  };

  if (coordsSpider.top < 0) {
    coordsSpider.top = 0;
  }

  if (coordsSpider.left < 0) {
    coordsSpider.left = 0;
  }

  if (coordsSpider.left + spiderSize.width > wall.clientWidth) {
    coordsSpider.left = wall.clientWidth - spiderSize.width;
  }

  if (coordsSpider.top + spiderSize.height > wall.clientHeight) {
    coordsSpider.top = wall.clientHeight - spiderSize.height;
  }
  
  spider.style.top = coordsSpider.top + 'px';
  spider.style.left = coordsSpider.left + 'px';
});
