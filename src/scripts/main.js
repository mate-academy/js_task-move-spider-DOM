'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;

  let newLeft = clickX - spiderWidth / 2;
  let newTop = clickY - spiderHeight / 2;

  newLeft = Math.max(0, Math.min(newLeft, wall.clientWidth - spiderWidth));
  newTop = Math.max(0, Math.min(newTop, wall.clientHeight - spiderHeight));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
