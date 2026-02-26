'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (!wall || !spider) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  const clickX = e.clientX;
  const clickY = e.clientY;

  const isInsideWall =
    clickX >= wallRect.left &&
    clickX <= wallRect.right &&
    clickY >= wallRect.top &&
    clickY <= wallRect.bottom;

  if (!isInsideWall) {
    return;
  }

  const xInside = clickX - wallRect.left - wall.clientLeft;
  const yInside = clickY - wallRect.top - wall.clientTop;

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  let spLeft = xInside - spider.offsetWidth / 2;
  let spTop = yInside - spider.offsetHeight / 2;

  spLeft = Math.max(0, Math.min(spLeft, wallWidth - spider.offsetWidth));
  spTop = Math.max(0, Math.min(spTop, wallHeight - spider.offsetHeight));

  spider.style.left = `${spLeft}px`;
  spider.style.top = `${spTop}px`;
});
