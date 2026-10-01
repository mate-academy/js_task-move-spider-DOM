'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const borderWidth = wall.clientLeft;
  const borderHeight = wall.clientTop;

  const clickX = e.clientX - wallRect.left - borderWidth;
  const clickY = e.clientY - wallRect.top - borderHeight;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const fieldWidth = wall.clientWidth;
  const fieldHeight = wall.clientHeight;

  let spiderLeft = clickX - spiderWidth / 2;
  let spiderTop = clickY - spiderHeight / 2;

  const maxLeft = fieldWidth - spiderWidth;
  const maxTop = fieldHeight - spiderHeight;

  spiderLeft = Math.max(0, Math.min(spiderLeft, maxLeft));
  spiderTop = Math.max(0, Math.min(spiderTop, maxTop));

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
});
