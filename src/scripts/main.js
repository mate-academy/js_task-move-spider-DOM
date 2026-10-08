'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const clickX = e.clientX - wallRect.left - wall.clientLeft;
  const clickY = e.clientY - wallRect.top - wall.clientTop;

  const spiderToLeft = clickX - spiderWidth / 2;
  const spiderToTop = clickY - spiderHeight / 2;

  const maxLeft = wall.clientWidth - spiderWidth;
  const maxTop = wall.clientHeight - spiderHeight;

  const toLeft = Math.max(0, Math.min(spiderToLeft, maxLeft));
  const toTop = Math.max(0, Math.min(spiderToTop, maxTop));

  spider.style.left = `${toLeft}px`;
  spider.style.top = `${toTop}px`;
});
