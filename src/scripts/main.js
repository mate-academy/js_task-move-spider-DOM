'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  let leftPosition =
    e.clientX - wallRect.left - spider.offsetWidth / 2;

  let topPosition =
    e.clientY - wallRect.top - spider.offsetHeight / 2;

  leftPosition = Math.max(
    0,
    Math.min(leftPosition, wall.clientWidth - spider.offsetWidth),
  );

  topPosition = Math.max(
    0,
    Math.min(topPosition, wall.clientHeight - spider.offsetHeight),
  );

  spider.style.left = `${leftPosition}px`;
  spider.style.top = `${topPosition}px`;
});
