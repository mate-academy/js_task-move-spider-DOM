'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (event) => {
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const wallRect = wall.getBoundingClientRect();
  const clickX = event.clientX - wallRect.left;
  const clickY = event.clientY - wallRect.top;

  spider.style.position = 'absolute';
  spider.style.left = `${clickX - spiderWidth / 2}px`;
  spider.style.top = `${clickY - spiderHeight / 2}px`;
});
