'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallPlace = wall.getBoundingClientRect();

document.addEventListener('click', (e) => {
  const xInsideWall = e.clientX - wallPlace.left;
  const yInsideWall = e.clientY - wallPlace.top;

  if (!wall.contains(e.target)) {
    return;
  }

  let left = xInsideWall - spider.offsetWidth / 2;
  let tops = yInsideWall - spider.offsetHeight / 2;

  left = Math.max(0, Math.min(left, wall.offsetWidth - spider.offsetWidth));
  tops = Math.max(0, Math.min(tops, wall.offsetHeight - spider.offsetHeight));

  spider.style.top = `${tops}px`;
  spider.style.left = `${left}px`;
});
