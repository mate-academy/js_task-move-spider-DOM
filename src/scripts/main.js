'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  // write code here
  const wallRect = wall.getBoundingClientRect();

  const spiderHalfWidth = spider.offsetWidth / 2;
  const spiderHalfHeight = spider.offsetHeight / 2;

  let left = e.clientX - wallRect.left - spiderHalfWidth;
  let topP = e.clientY - wallRect.top - spiderHalfHeight;

  left = Math.max(0, Math.min(left, wall.clientWidth - spider.offsetWidth));
  topP = Math.max(0, Math.min(topP, wall.clientHeight - spider.offsetHeight));

  spider.style.position = 'absolute';
  spider.style.left = `${left}px`;
  spider.style.top = `${topP}px`;
});
