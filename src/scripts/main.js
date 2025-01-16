'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  let newLeft =
    e.clientX - wall.offsetLeft - wall.clientLeft - spider.offsetWidth / 2;
  let newTop =
    e.clientY - wall.offsetTop - wall.clientTop - spider.offsetHeight / 2;

  newLeft = Math.max(
    0,
    Math.min(newLeft, wall.clientWidth - spider.offsetWidth),
  );

  newTop = Math.max(
    0,
    Math.min(newTop, wall.clientHeight - spider.offsetHeight),
  );

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
