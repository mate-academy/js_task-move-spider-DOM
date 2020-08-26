'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target.closest('.wall')) {
    const spiderX = e.offsetX - spider.offsetWidth / 2;
    const spiderY = e.offsetY - spider.offsetHeight / 2;

    spider.style.left = positionSpider(spiderX) + 'px';
    spider.style.top = positionSpider(spiderY) + 'px';
  }

  function positionSpider(SpiderCoords) {
    if (SpiderCoords < 0) {
      return 0;
    } else if (SpiderCoords > (wall.clientHeight - spider.offsetHeight)) {
      return wall.clientHeight - spider.offsetHeight;
    }

    return SpiderCoords;
  }
});
