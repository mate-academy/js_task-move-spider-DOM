'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  // write code here
  const spiderRec = spider.getBoundingClientRect();
  const wallRec = wall.getBoundingClientRect();
  const clientX = e.clientX;
  const clientY = e.clientY;

  const computedLeft = clientX - wallRec.left - spiderRec.width / 2;
  const computedTop = clientY - wallRec.top - spiderRec.height / 2;

  const minLocalX = 0;
  const maxLocalX = wall.clientWidth - spiderRec.width;
  const clampedX = Math.min(Math.max(computedLeft, minLocalX), maxLocalX);

  const minLocalY = 0;
  const maxLocalY = wall.clientHeight - spiderRec.height;
  const clampedY = Math.min(Math.max(computedTop, minLocalY), maxLocalY);

  spider.style.left = `${clampedX}px`;
  spider.style.top = `${clampedY}px`;
});
