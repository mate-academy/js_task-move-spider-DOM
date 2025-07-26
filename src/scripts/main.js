'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.display = 'block';

wall.addEventListener('click', (e) => {
  // write code here

  const wallRect = wall.getBoundingClientRect();
  const x = e.clientX - wallRect.left;
  const y = e.clientY - wallRect.top;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let newX = x - spiderWidth / 2;
  let newY = y - spiderHeight / 2;

  newY -= 10;
  newX -= 10;

  const maxX = wall.clientWidth - spiderWidth;
  const maxY = wall.clientHeight - spiderHeight;

  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));

  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
