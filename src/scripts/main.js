'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  if (!wall.contains(e.target)) {
    return;
  }

  const spiderWidth = parseFloat(window.getComputedStyle(spider).width);
  const spiderHeight = parseFloat(window.getComputedStyle(spider).height);
  const clickX = e.offsetX;
  const clickY = e.offsetY;
  let left = clickX - spiderWidth / 2;
  let topp = clickY - spiderHeight / 2;

  left = Math.max(0, Math.min(left, wall.clientWidth - spiderWidth));
  topp = Math.max(0, Math.min(topp, wall.clientHeight - spiderHeight));
  spider.style.left = `${left}px`;
  spider.style.top = `${topp}px`;
});
