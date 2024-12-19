'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  let y = e.clientY - wall.offsetTop - spider.offsetHeight / 2;
  let x = e.clientX - wall.offsetLeft - spider.offsetWidth / 2;

  y = Math.max(
    spider.offsetHeight / 2,
    Math.min(
      y + spider.offsetHeight / 3,
      wall.offsetHeight - 2 * wall.clientTop - spider.offsetHeight / 2,
    ),
  );

  x = Math.max(
    spider.offsetWidth / 2,
    Math.min(
      x + spider.offsetWidth / 3,
      wall.offsetWidth - 2 * wall.clientLeft - spider.offsetWidth / 2,
    ),
  );

  spider.style.top = `${y - spider.offsetHeight / 2}px`;
  spider.style.left = `${x - spider.offsetWidth / 2}px`;
});
