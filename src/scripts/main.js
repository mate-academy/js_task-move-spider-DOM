'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  const realX = spider.getBoundingClientRect().left - spider.width / 2;
  const realY = spider.getBoundingClientRect().top - spider.height / 2;

  let valueLeft = parseFloat(getComputedStyle(spider).left);
  let valueTop = parseFloat(getComputedStyle(spider).top);

  let moveLeft = valueLeft + (e.clientX - realX);
  let moveTop = valueTop + (e.clientY - realY);

  if (moveLeft < 0) {
    moveLeft = spider.width;
  } else if (moveLeft > wall.width) {
    moveLeft = wall.width;
  }

  if (moveTop < 0) {
    moveTop = spider.width;
  } else if (moveTop > wall.height) {
    moveTop = wall.height;
  }

  spider.style.left = `${moveLeft - spider.width}px`;
  spider.style.top = `${moveTop - spider.height}px`;
});
