'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallOffset = 10;

wall.addEventListener('click', (e) => {
  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();

  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;

  const halfSpiderWidth = spiderRect.width / 2;
  const halfSpiderHeight = spiderRect.height / 2;

  let newX = clickX - halfSpiderWidth - wallOffset;
  let newY = clickY - halfSpiderHeight - wallOffset;

  const maxX = wall.clientWidth - spiderRect.width;
  const maxY = wall.clientHeight - spiderRect.height;

  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));

  spider.style.transform = `translate(${newX}px, ${newY}px)`;
});
