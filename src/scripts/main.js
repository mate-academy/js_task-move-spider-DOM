'use strict';

document.addEventListener('click', (e) => {
  e.preventDefault();

  const field = e.target.closest('.wall');

  if (!field) {
    return;
  }

  const spider = document.querySelector('.spider');

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const spiderOffsetX = spiderWidth / 2;
  const spiderOffsetY = spiderHeight / 2;

  const fieldWidth = field.clientWidth;
  const fieldHeight = field.clientHeight;

  const fieldBoundingClientRect = field.getBoundingClientRect();
  const clickX = e.clientX - fieldBoundingClientRect.left - field.clientLeft;
  const clickY = e.clientY - fieldBoundingClientRect.top - field.clientTop;

  spider.style.top = `${clickY - spiderOffsetY}px`;
  spider.style.left = `${clickX - spiderOffsetX}px`;

  if (Number(spider.style.left.replaceAll('px', '')) < 0) {
    spider.style.left = `0px`;
  }

  if (
    Number(spider.style.left.replaceAll('px', '')) + spiderWidth >
    fieldWidth
  ) {
    spider.style.left = `${fieldWidth - spiderWidth}px`;
  }

  if (Number(spider.style.top.replaceAll('px', '')) < 0) {
    spider.style.top = `0px`;
  }

  if (
    Number(spider.style.top.replaceAll('px', '')) + spiderHeight >
    fieldHeight
  ) {
    spider.style.top = `${fieldHeight - spiderHeight}px`;
  }
});
