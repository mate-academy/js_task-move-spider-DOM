'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const coordsWall = wall.getBoundingClientRect();
  const sqearWall = e.target.closest('.wall');

  if (sqearWall) {
    const topClick = e.clientY - coordsWall.y - spider.offsetHeight / 2;
    const leftClick = e.clientX - coordsWall.x - spider.offsetWidth / 2;

    const topSpider = Math.max(
      0,
      Math.min(wall.clientHeight - spider.clientHeight, topClick),
    );
    const leftSpider = Math.max(
      0,
      Math.min(wall.clientHeight - spider.clientHeight, leftClick),
    );

    spider.style.left = leftSpider + 'px';
    spider.style.top = topSpider + 'px';
  }
});
