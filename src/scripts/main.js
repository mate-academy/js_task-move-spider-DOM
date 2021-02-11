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
  const maxHeight = wall.clientHeight - spiderParams.height;
  const maxWidth = wall.clientWidth - spiderParams.width;
  const isSpider = item.classList.contains('spider');

  if (isSpider) {
    coordsY += parseFloat(spider.style.top);
    coordsX += parseFloat(spider.style.left);
  }

  if (e.offsetX > maxWidth && !isSpider) {
    spider.style.left = `${maxWidth}px`;
  } else if (e.offsetX < 0 + spiderParams.width && !isSpider) {
    spider.style.left = `${0}px`;
  } else {
    spider.style.left = `${coordsX}px`;
  }

  if (e.offsetY > maxHeight && !isSpider) {
    spider.style.top = `${maxHeight}px`;
  } else if (e.offsetY < 0 + spiderParams.height && !isSpider) {
    spider.style.top = `${0}px`;
  } else {
    spider.style.top = `${coordsY}px`;
  }
});
