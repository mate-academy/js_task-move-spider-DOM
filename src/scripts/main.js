'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const wallRect = wall.getBoundingClientRect();
  const spiderHalfWidth = spider.offsetWidth / 2;
  const spiderHalfHeight = spider.offsetHeight / 2;
  const borderWidth = (wall.offsetWidth - wall.clientWidth) / 2;

  let newLeft = e.clientX - wallRect.left - borderWidth - spiderHalfWidth;
  let newTop = e.clientY - wallRect.top - borderWidth - spiderHalfHeight;

  newLeft = Math.max(
    0,
    Math.min(newLeft, wallRect.width - 2 * borderWidth - spider.offsetWidth),
  );

  newTop = Math.max(
    0,
    Math.min(newTop, wallRect.height - 2 * borderWidth - spider.offsetHeight),
  );

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
