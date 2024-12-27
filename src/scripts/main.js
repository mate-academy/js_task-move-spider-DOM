'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const wallPosition = wall.getBoundingClientRect();
  const computedStyle = window.getComputedStyle(wall);
  const borderTop = parseInt(computedStyle.borderTopWidth, 10);
  const borderLeft = parseInt(computedStyle.borderLeftWidth, 10);
  let topPosition =
    e.clientY - wallPosition.top - borderTop - spider.clientWidth / 2;
  let leftPosition =
    e.clientX - wallPosition.left - borderLeft - spider.clientHeight / 2;

  leftPosition = Math.max(
    0,
    Math.min(leftPosition, wall.clientWidth - spider.clientWidth),
  );

  topPosition = Math.max(
    0,
    Math.min(topPosition, wall.clientHeight - spider.clientHeight),
  );

  spider.style.top = `${topPosition}px`;
  spider.style.left = `${leftPosition}px`;
});
