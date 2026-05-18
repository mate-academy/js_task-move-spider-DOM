'use strict';

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const spider = wall.querySelector('.spider');

  if (!spider) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const pointerX = e.clientX - wallRect.left - wall.clientLeft;
  const pointerY = e.clientY - wallRect.top - wall.clientTop;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  const spiderLeft = Math.min(
    Math.max(pointerX - spider.offsetWidth / 2, 0),
    maxLeft,
  );
  const spiderTop = Math.min(
    Math.max(pointerY - spider.offsetHeight / 2, 0),
    maxTop,
  );

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
});
