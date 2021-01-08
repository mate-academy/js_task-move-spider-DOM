'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  };

  const halfSpider = spider.offsetWidth / 2;
  const x = e.offsetX - halfSpider;
  const y = e.offsetY - halfSpider;

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;

  SpiderOnTheEdge(x, y);
});

function SpiderOnTheEdge(horizontalPos, verticalPos) {
  if (horizontalPos > wall.clientWidth - spider.offsetWidth) {
    spider.style.left = wall.clientWidth - spider.offsetWidth + 'px';
  }

  if (horizontalPos < 0) {
    spider.style.left = '0px';
  }

  if (verticalPos > wall.clientHeight - spider.offsetHeight) {
    spider.style.top = wall.clientHeight - spider.offsetHeight + 'px';
  }

  if (verticalPos < 0) {
    spider.style.top = '0px';
  }
}
