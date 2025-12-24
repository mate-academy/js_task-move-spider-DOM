'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();
  const borderLeft = wall.clientLeft;
  const borderTop = wall.clientTop;

  const leftPos = e.clientX - rect.left - borderLeft - spider.clientWidth / 2;
  const topPos = e.clientY - rect.top - borderTop - spider.clientHeight / 2;

  spider.style.left = leftPos + 'px';
  spider.style.top = topPos + 'px';

  if (leftPos < 0) {
    spider.style.left = 0;
  }

  if (topPos < 0) {
    spider.style.top = 0;
  }

  if (leftPos + spider.clientWidth > wall.clientWidth) {
    spider.style.left = wall.clientWidth - spider.clientWidth + 'px';
  }

  if (topPos + spider.clientHeight > wall.clientHeight) {
    spider.style.top = wall.clientHeight - spider.clientHeight + 'px';
  }
});
