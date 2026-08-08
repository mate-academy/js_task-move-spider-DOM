'use strict';

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const spider = document.querySelector('.spider');
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  let x = e.clientX - wallRect.left - wall.clientLeft - spiderRect.width / 2;
  let y = e.clientY - wallRect.top - wall.clientTop - spiderRect.height / 2;

  x = Math.max(
    0,
    Math.min(x, wallRect.width - spiderRect.width - wall.clientLeft * 2),
  );

  y = Math.max(
    0,
    Math.min(y, wallRect.height - spiderRect.height - wall.clientTop * 2),
  );
  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
