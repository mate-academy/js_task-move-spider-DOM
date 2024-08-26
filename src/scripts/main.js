'use strict';

document.querySelector('.wall').addEventListener('click', (e) => {
  const spider = document.querySelector('img.spider');

  const div = e.currentTarget;
  const rect = div.getBoundingClientRect();

  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let newLeft = offsetX - spiderWidth / 2 - 10;
  let newTop = offsetY - spiderHeight / 2 - 10;

  if (newLeft < 0) {
    newLeft = 0;
  }

  if (newTop < 0) {
    newTop = 0;
  }

  if (newLeft + spiderWidth > rect.width) {
    newLeft = rect.width - spiderWidth - 20;
  }

  if (newTop + spiderHeight > rect.height) {
    newTop = rect.height - spiderHeight - 20;
  }

  spider.style.left = newLeft + 'px';
  spider.style.top = newTop + 'px';
});
