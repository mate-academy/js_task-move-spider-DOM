'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = 'relative';
spider.style.position = 'absolute';

wall.addEventListener('click', (e) => {
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let leftPos = e.offsetX - spiderWidth / 2;
  let topPos = e.offsetY - spiderHeight / 2;

  leftPos = Math.max(0, Math.min(leftPos, wall.clientWidth - spiderWidth));
  topPos = Math.max(0, Math.min(topPos, wall.clientHeight - spiderHeight));

  spider.style.left = leftPos + 'px';
  spider.style.top = topPos + 'px';
});
