'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  const pageX = e.pageX;
  const pageY = e.pageY;

  const isInsideWall =
    pageX >= wallRect.left &&
    pageX <= wallRect.right &&
    pageY >= wallRect.top &&
    pageY <= wallRect.bottom;

  if (!isInsideWall) {
    return;
  }

  const wallLeft = wallRect.left + window.scrollX;
  const wallTop = wallRect.top + window.scrollY;

  const borderLeft = wall.clientLeft;
  const borderTop = wall.clientTop;

  let newLeft = pageX - wallLeft - borderLeft - spiderWidth / 2;
  let newTop = pageY - wallTop - borderTop - spiderHeight / 2;

  const maxLeft = wall.clientWidth - spiderWidth;
  const maxTop = wall.clientHeight - spiderHeight;

  newLeft = Math.max(0, Math.min(newLeft, maxLeft));
  newTop = Math.max(0, Math.min(newTop, maxTop));

  spider.style.position = 'absolute';
  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
