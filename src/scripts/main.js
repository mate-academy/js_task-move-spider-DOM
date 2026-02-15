'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  if (!wall.contains(e.target)) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  const borderLeft = wall.clientLeft;
  const borderTop = wall.clientTop;

  const clickX = e.clientX - wallRect.left - borderLeft;
  const clickY = e.clientY - wallRect.top - borderTop;

  const spiderW = spider.offsetWidth;
  const spiderH = spider.offsetHeight;

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
