'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const el = {
    wall: document.querySelector('.wall'),
    spider: document.querySelector('.spider'),
  };

  if (e.target === el.spider || e.target === el.spider.closest('.wall')) {
    const topCalculation =
      e.clientY - (window.innerHeight - el.wall.clientHeight) / 2;
    const leftCalculation =
      e.clientX - (window.innerWidth - el.wall.clientWidth) / 2;

    let spiderTop = topCalculation - el.spider.clientHeight / 2;
    let spiderLeft = leftCalculation - el.spider.clientWidth / 2;

    if (topCalculation < el.spider.clientHeight / 2) {
      spiderTop = 0;
    }

    if (topCalculation > el.wall.clientHeight - el.spider.clientHeight / 2) {
      spiderTop = el.wall.clientHeight - el.spider.clientHeight;
    }

    if (leftCalculation < el.spider.clientWidth / 2) {
      spiderLeft = 0;
    }

    if (leftCalculation > el.wall.clientWidth - el.spider.clientWidth / 2) {
      spiderLeft = el.wall.clientWidth - el.spider.clientWidth;
    }

    el.wall.style.position = 'relative';
    el.spider.style.position = 'absolute';
    el.spider.style.top = `${spiderTop}px`;
    el.spider.style.left = `${spiderLeft}px`;
  }
});
