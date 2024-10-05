'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const { offsetX: x, offsetY: y } = e;

  const newLeft = Math.max(
    0,
    Math.min(x - spider.clientWidth / 2, wall.clientWidth - spider.clientWidth),
  );

  const newTop = Math.max(
    0,
    Math.min(
      y - spider.clientHeight / 2,
      wall.clientHeight - spider.clientHeight,
    ),
  );

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
