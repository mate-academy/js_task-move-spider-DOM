'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.position = 'absolute';
spider.style.transition = 'top 0.3s ease, left 0.3s ease';

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const computedStyle = getComputedStyle(wall);
  const border = parseInt(computedStyle.borderWidth, 10);

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const clickX = e.clientX - wallRect.left - border;
  const clickY = e.clientY - wallRect.top - border;

  const maxLeft = wall.clientWidth - spiderWidth;
  const maxTop = wall.clientHeight - spiderHeight;

  let newLeft = clickX - spiderWidth / 2;
  let newTop = clickY - spiderHeight / 2;

  newLeft = Math.max(0, Math.min(newLeft, maxLeft));
  newTop = Math.max(0, Math.min(newTop, maxTop));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
