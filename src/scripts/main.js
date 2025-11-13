'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const wallRect = wall.getBoundingClientRect();

  const insideX = x - wallRect.left;
  const insideY = y - wallRect.top;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let spiderX = insideX - spiderWidth / 2;
  let spiderY = insideY - spiderHeight / 2;

  spiderX = Math.min(Math.max(spiderX, 0), wall.clientWidth - spiderWidth);
  spiderY = Math.min(Math.max(spiderY, 0), wall.clientHeight - spiderHeight);

  spider.style.left = spiderX + 'px';
  spider.style.top = spiderY + 'px';
});
