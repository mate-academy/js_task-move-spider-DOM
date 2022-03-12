'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  e.preventDefault();

  if (e.target.closest('.wall')) {
    const spiderW = spider.offsetHeight;
    const spiderH = spider.offsetWidth;

    const maxYcoord = wall.clientWidth - spiderW;
    const maxXcoord = wall.clientHeight - spiderH;

    let topY = e.y - (innerHeight - wall.clientHeight + spiderH) / 2;
    let leftX = e.x - (innerWidth - wall.clientWidth + spiderW) / 2;

    topY = topY < 0 ? 0 : topY > maxXcoord ? maxXcoord : topY;
    leftX = leftX < 0 ? 0 : leftX > maxYcoord ? maxYcoord : leftX;

    spider.style.top = topY + 'px';
    spider.style.left = leftX + 'px';
  }
});
