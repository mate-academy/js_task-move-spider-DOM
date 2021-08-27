'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const item = e.target.closest('.wall');

  if (item !== e.target) {
    return;
  }

  const spiderWidth = parseFloat(getComputedStyle(spider).width);
  const spiderHeight = parseFloat(getComputedStyle(spider).height);
  const wallWidth = parseFloat(getComputedStyle(item).width);
  const wallHeight = parseFloat(getComputedStyle(item).height);

  spider.style.top = `${e.offsetY - spiderWidth / 2}px`;
  spider.style.left = `${e.offsetX - spiderHeight / 2}px`;

  if (e.offsetX >= wallWidth - spiderWidth / 2) {
    spider.style.left = `${wallWidth - spiderWidth}px`;
  }

  if (e.offsetX <= spiderWidth / 2) {
    spider.style.left = '0px';
  }

  if (e.offsetY >= wallHeight - spiderHeight / 2) {
    spider.style.top = `${wallHeight - spiderHeight}px`;
  }

  if (e.offsetY <= spiderHeight / 2) {
    spider.style.top = '0px';
  }
});
