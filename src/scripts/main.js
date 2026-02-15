'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  if (!wall.contains(e.target)) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  const clickX = e.clientX - wallRect.left - wall.clientLeft;
  const clickY = e.clientY - wallRect.top - wall.clientTop;

  const spiderRect = spider.getBoundingClientRect();
  const spiderW = spiderRect.width;
  const spiderH = spiderRect.height;

  let varLeft = clickX - spiderW / 2;
  let varTop = clickY - spiderH / 2;

  const maxLeft = wall.clientWidth - spiderW;
  const maxTop = wall.clientHeight - spiderH;

  if (varLeft < 0) {
    varLeft = 0;
  }

  if (varTop < 0) {
    varTop = 0;
  }

  if (varLeft > maxLeft) {
    varLeft = maxLeft;
  }

  if (varTop > maxTop) {
    varTop = maxTop;
  }

  spider.style.left = `${varLeft}px`;
  spider.style.top = `${varTop}px`;
});
