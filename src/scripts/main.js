'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const spider = document.querySelector('.spider');
  const spiderCentr = spider.clientWidth / 2;
  const width = wall.clientWidth - spider.clientWidth;

  spider.style.top = e.offsetY - spiderCentr + 'px';
  spider.style.left = e.offsetX - spiderCentr + 'px';

  if (e.offsetY - spiderCentr > width) {
    spider.style.top = width + 'px';
  }

  if (e.offsetY - spiderCentr < 0) {
    spider.style.top = '0px';
  };

  if (e.offsetX - spiderCentr > width) {
    spider.style.left = width + 'px';
  }

  if (e.offsetX - spiderCentr < 0) {
    spider.style.left = '0px';
  };
});
