'use strict';

const spider = document.querySelector('img');
const spiderParams = spider.getBoundingClientRect();
const wall = document.querySelector('div');

document.addEventListener('click', e => {
  const item = e.target;

  if (!item.classList.contains('wall') && !item.classList.contains('spider')) {
    return;
  }

  let coordsY = e.offsetY - spiderParams.width / 2;
  let coordsX = e.offsetX - spiderParams.height / 2;
  const isSpider = item.classList.contains('spider');

  if (isSpider) {
    coordsY += parseFloat(spider.style.top);
    coordsX += parseFloat(spider.style.left);
  }

  if (e.offsetX > wall.clientWidth - spiderParams.width && !isSpider) {
    spider.style.left = `${wall.clientWidth - spiderParams.width}px`;
  } else if (e.offsetX < 0 + spiderParams.width && !isSpider) {
    spider.style.left = `${0}px`;
  } else {
    spider.style.left = `${coordsX}px`;
  }

  if (e.offsetY > wall.clientHeight - spiderParams.height && !isSpider) {
    spider.style.top = `${wall.clientHeight - spiderParams.height}px`;
  } else if (e.offsetY < 0 + spiderParams.height && !isSpider) {
    spider.style.top = `${0}px`;
  } else {
    spider.style.top = `${coordsY}px`;
  }
});
