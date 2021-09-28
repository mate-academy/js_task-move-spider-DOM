'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderStyle = getComputedStyle(spider);
const spiderWidth = parseFloat(spiderStyle.width);
const spiderHeight = parseFloat(spiderStyle.height);

const rect = spider.getBoundingClientRect();

document.addEventListener('click', e => {
  const item = e.target;

  if (!item.classList.contains('wall')) {
    return;
  }

  const x = e.clientX - rect.left - (spiderWidth / 2) + 'px';
  const y = e.clientY - rect.top - (spiderHeight / 2) + 'px';

  spider.style.left = x;
  spider.style.top = y;

  if (parseFloat(spider.style.left) + spider.clientWidth > wall.clientWidth) {
    spider.style.left = (wall.clientWidth - spider.clientWidth) + 'px';
  }

  if (parseFloat(spider.style.top) + spider.clientHeight > wall.clientHeight) {
    spider.style.top = (wall.clientHeight - spider.clientHeight) + 'px';
  }

  if (parseFloat(spider.style.left) < 0) {
    spider.style.left = 0;
  }

  if (parseFloat(spider.style.top) < 0) {
    spider.style.top = 0;
  }
});
