'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const rect = wall.getBoundingClientRect();

  const rawLeft =
    e.clientX - (rect.left + wall.clientLeft) - spider.offsetWidth / 2;
  const rawTop =
    e.clientY - (rect.top + wall.clientTop) - spider.offsetHeight / 2;

  const finalLeft = Math.min(
    Math.max(0, rawLeft),
    wall.clientWidth - spider.offsetWidth,
  );
  const finalTop = Math.min(
    Math.max(0, rawTop),
    wall.clientHeight - spider.offsetHeight,
  );

  spider.style.left = `${finalLeft}px`;
  spider.style.top = `${finalTop}px`;
});
