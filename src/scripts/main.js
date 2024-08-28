'use strict';

document.querySelector('.wall').addEventListener('click', (e) => {
  const spider = document.querySelector('img.spider');

  const div = e.currentTarget;
  const rect = div.getBoundingClientRect();

  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;

  const borderWidth = parseFloat(getComputedStyle(div).borderWidth);
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let newLeft = offsetX - spiderWidth / 2 - borderWidth;
  let newTop = offsetY - spiderHeight / 2 - borderWidth;

  if (newLeft < 0) {
    newLeft = 0;
  }

  if (newTop < 0) {
    newTop = 0;
  }

  if (newLeft + spiderWidth > rect.width) {
    newLeft = rect.width - spiderWidth - borderWidth * 2;
  }

  if (newTop + spiderHeight > rect.height) {
    newTop = rect.height - spiderHeight - borderWidth * 2;
  }

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
