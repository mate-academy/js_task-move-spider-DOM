'use strict';

const wall = document.querySelector('.wall');
const wallHeight = parseFloat(window.getComputedStyle(wall).height);
const wallWidth = parseFloat(window.getComputedStyle(wall).width);

const borderWidth = parseFloat(window.getComputedStyle(wall).borderWidth);

const wallTop = wall.getBoundingClientRect().top + borderWidth;
const wallLeft = wall.getBoundingClientRect().left + borderWidth;

const spider = document.querySelector('.spider');
const spiderHeight = parseFloat(window.getComputedStyle(spider).height);
const spiderWidth = parseFloat(window.getComputedStyle(spider).width);

document.addEventListener('click', e => {
  const target = e.target.closest('.wall');

  if (!target) {
    return;
  }

  let top = e.clientY - wallTop - spiderHeight / 2;
  let left = e.clientX - wallLeft - spiderWidth / 2;

  if (top < 0) {
    top = 0;
  }

  if (left < 0) {
    left = 0;
  }

  if (top > wallHeight - spiderHeight) {
    top = wallHeight - spiderHeight;
  }

  if (left > wallWidth - spiderWidth) {
    left = wallWidth - spiderWidth;
  }

  spider.style.top = `${top}px`;
  spider.style.left = `${left}px`;
});
