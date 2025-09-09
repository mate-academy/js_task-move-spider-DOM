'use strict';

const spider = document.querySelector('.spider');

const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  // click outside wall element
  if (!wall.contains(e.target)) {
    return;
  }

  // get both computed spider dimensions
  const spiderWidth = parseFloat(window.getComputedStyle(spider).width);
  const spiderHeight = parseFloat(window.getComputedStyle(spider).height);

  // offset from wall (not clientX/Y - related to viewport)
  const clickX = e.offsetX;
  const clickY = e.offsetY;

  // prepare position of spider after user click
  let left = clickX - spiderWidth / 2;
  let top = clickY - spiderHeight / 2; // eslint-disable-line no-shadow

  // minmax arrow function for later use
  const minmax = (min, value, max) => Math.min(max, Math.max(min, value));

  // limit spider in boundaries of a wall
  left = minmax(0, left, wall.clientWidth - spiderWidth);
  top = minmax(0, top, wall.clientHeight - spiderHeight);

  spider.style.left = `${left}px`;
  spider.style.top = `${top}px`;
});
