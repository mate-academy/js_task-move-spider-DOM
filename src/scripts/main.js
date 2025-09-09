'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  wall.addEventListener('click', (e) => {
    const { top: topPx, left: leftPx } = wall.getBoundingClientRect();

    let x = e.clientX - leftPx - wall.clientLeft - spider.offsetWidth / 2;
    let y = e.clientY - topPx - wall.clientTop - spider.offsetHeight / 2;

    x = Math.max(0, Math.min(x, wall.clientWidth - spider.offsetWidth));
    y = Math.max(0, Math.min(y, wall.clientHeight - spider.offsetHeight));

    spider.style.transform = `translate(${x}px, ${y}px)`;
  });
});
