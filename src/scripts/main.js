'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  };

  const coordsSpider = {
    y: e.offsetX - spider.offsetWidth / 2,
    x: e.offsetY - spider.offsetHeight / 2,
  };

  spider.style.top = coordsSpider.x + 'px';
  spider.style.left = coordsSpider.y + 'px';

  if (coordsSpider.x < 0) {
    spider.style.top = '0px';
  }

  if (coordsSpider.y < 0) {
    spider.style.left = '0px';
  }

  if (coordsSpider.x > (wall.clientHeight - spider.clientHeight)) {
    spider.style.top = wall.clientHeight - spider.clientHeight + 'px';
  }

  if (coordsSpider.y > (wall.clientWidth - spider.clientHeight)) {
    spider.style.left = wall.clientWidth - spider.clientWidth + 'px';
  };
});
