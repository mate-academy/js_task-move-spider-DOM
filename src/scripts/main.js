'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const fieldWidth = field.clientWidth;
const fieldHeight = field.clientHeight;
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

document.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const wallRect = field.getBoundingClientRect();

  let newX = x - wallRect.left - spiderWidth / 2;
  let newY = y - wallRect.top - spiderHeight / 2;

  newX = Math.max(0, Math.min(newX, fieldWidth - spiderWidth));
  newY = Math.max(0, Math.min(newY, fieldHeight - spiderHeight));

  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
