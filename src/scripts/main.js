'use strict';

const $spider = document.querySelector('img.spider');
const $wall = document.querySelector('div.wall');

$wall.addEventListener('click', (e) => {
  // write code here

  const wallRect = $wall.getBoundingClientRect();
  const spiderRect = $spider.getBoundingClientRect();
  const borderTop = parseInt(getComputedStyle($wall).borderTopWidth);
  const borderLeft = parseInt(getComputedStyle($wall).borderLeftWidth);

  const borderOffsetLeft = borderLeft * 2;
  const borderOffsetTop = borderTop * 2;
  const maxPosX = wallRect.width - borderOffsetLeft - spiderRect.width;
  const maxPosY = wallRect.height - borderOffsetTop - spiderRect.height;

  // This is actually the correct way to calculate position that is relative.
  // Parent's top and left begin from topmost and leftmost point, INCLUDING
  // border. That's why borderTop and borderLeft is added, because
  // further calculation subtract wallRect object x and y keys, which, for
  // some reason, correspond to the element topmost and leftmost point,
  // EXCLUDING border. Therefore, to actually make coordinates begin from
  // correct top and left points, we need to additionaly subtract borderTop
  // and borderLeft. Why? I don't know. Tests fail if completed otherwise.
  const clickX = e.clientX - spiderRect.width / 2 - borderLeft - wallRect.x;
  const clickY = e.clientY - spiderRect.height / 2 - borderTop - wallRect.y;

  const newPosX = Math.max(Math.min(clickX, maxPosX), 0);
  const newPosY = Math.max(Math.min(clickY, maxPosY), 0);

  $spider.style.top = `${newPosY}px`;
  $spider.style.left = `${newPosX}px`;
});
