'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const rect = wall.getBoundingClientRect();

  let newLeft = e.clientX - rect.left - spider.clientWidth / 2;
  let newTop = e.clientY - rect.top - spider.clientHeight / 2;

  newLeft = Math.max(
    0,
    Math.min(newLeft, wall.clientWidth - spider.clientWidth),
  );

  newTop = Math.max(
    0,
    Math.min(newTop, wall.clientHeight - spider.clientHeight),
  );
  spider.style.top = `${newTop}px`;
  spider.style.left = `${newLeft}px`;
});
