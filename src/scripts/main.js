'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!spider || !wall) {
    return;
  }

  const f = wall.getBoundingClientRect();
  let x = e.clientX - f.left - wall.clientLeft - spider.offsetWidth / 2;
  let y = e.clientY - f.top - wall.clientTop - spider.offsetHeight / 2;
  const insideWall =
    e.clientX >= f.left &&
    e.clientX <= f.left + wall.offsetWidth &&
    e.clientY >= f.top &&
    e.clientY <= f.top + wall.offsetHeight;

  if (!insideWall) {
    return;
  }

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > wall.clientWidth - spider.offsetWidth) {
    x = wall.clientWidth - spider.offsetWidth;
  }

  if (y > wall.clientHeight - spider.offsetHeight) {
    y = wall.clientHeight - spider.offsetHeight;
  }

  if (spider instanceof HTMLElement) {
    spider.style.left = x + 'px';
    spider.style.top = y + 'px';
  }
});
