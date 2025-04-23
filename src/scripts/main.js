'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();

  if (
    e.clientX >= wallRect.left &&
    e.clientX <= wallRect.right &&
    e.clientY >= wallRect.top &&
    e.clientY <= wallRect.bottom
  ) {
    e.preventDefault();

    const wallY = wall.clientHeight;
    const wallX = wall.clientWidth;

    const spiderX = spider.clientWidth;
    const spiderY = spider.clientHeight;

    const clickX = e.offsetX;
    const clickY = e.offsetY;

    const maxX = wallX - spiderX;
    const maxY = wallY - spiderY;

    spider.style.left =
      Math.max(0, Math.min(clickX - spiderX / 2, maxX)) + 'px';
    spider.style.top = Math.max(0, Math.min(clickY - spiderY / 2, maxY)) + 'px';
  }
});
