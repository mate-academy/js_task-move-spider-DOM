'use strict';

document.addEventListener('click', e => {
  const mouse = e.target;
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (mouse !== wall) {
    return;
  }

  let y = e.offsetY;
  let x = e.offsetX;
  const wY = e.target.clientHeight;
  const wX = e.target.clientWidth;
  const yConstraint = spider.width;
  const xConstraint = spider.height;

  if (y < 0) {
    y = 0;
  }

  if (x < 0) {
    x = 0;
  }

  if (y > wY - yConstraint) {
    y = wY - yConstraint;
  }

  if (x > wX - xConstraint) {
    x = wX - xConstraint;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
