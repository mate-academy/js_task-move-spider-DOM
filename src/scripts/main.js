'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = 'relative';
spider.style.position = 'absolute';

wall.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const borderLeft = wall.clientLeft;
  const borderTop = wall.clientTop;

  let leftPosition = e.clientX - rect.left - borderLeft - spiderWidth / 2;
  let topPosition = e.clientY - rect.top - borderTop - spiderHeight / 2;

  const maxLeft = wall.clientWidth - spiderWidth;
  const maxTop = wall.clientHeight - spiderHeight;

  leftPosition = Math.max(0, Math.min(leftPosition, maxLeft));
  topPosition = Math.max(0, Math.min(topPosition, maxTop));

  spider.style.left = leftPosition + 'px';
  spider.style.top = topPosition + 'px';
});
