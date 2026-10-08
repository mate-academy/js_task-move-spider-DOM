'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const x = e.clientX - wallRect.left - wall.clientLeft;
  const y = e.clientY - wallRect.top - wall.clientTop;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const left = x - spiderWidth / 2;
  // eslint-disable-next-line no-shadow
  const top = y - spiderHeight / 2;

  const maxLeft = wall.clientWidth - spiderWidth;
  const maxTop = wall.clientHeight - spiderHeight;

  const finalLeft = Math.max(0, Math.min(left, maxLeft));
  const finalTop = Math.max(0, Math.min(top, maxTop));

  spider.style.left = `${finalLeft}px`;
  spider.style.top = `${finalTop}px`;
});
