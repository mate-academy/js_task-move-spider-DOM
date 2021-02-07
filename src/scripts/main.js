'use strict';

const spider = document.querySelector('img');
const spiderParams = spider.getBoundingClientRect();
const wall = document.querySelector('div');

document.addEventListener('click', e => {
  const item = e.target;
  const coordsY = e.offsetY - spiderParams.width / 2;
  const coordsX = e.offsetX - spiderParams.height / 2;

  if (!item.classList.contains('wall')) {
    return;
  }

  if (e.offsetX > wall.clientWidth - spiderParams.width) {
    spider.style.left = `${wall.clientWidth - spiderParams.width}px`;
  } else if (e.offsetX < 0 + spiderParams.width) {
    spider.style.left = `${0}px`;
  } else {
    spider.style.left = `${coordsX}px`;
  }

  if (e.offsetY > wall.clientHeight - spiderParams.height) {
    spider.style.top = `${wall.clientHeight - spiderParams.height}px`;
  } else if (e.offsetY < 0 + spiderParams.height) {
    spider.style.top = `${0}px`;
  } else {
    spider.style.top = `${coordsY}px`;
  }
});
