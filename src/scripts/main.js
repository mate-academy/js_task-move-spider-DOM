'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target === wall) {
    const wallRect = wall.getBoundingClientRect();

    const wallLeft = wallRect.left + wall.clientLeft + window.scrollX;
    const wallTop = wallRect.top + wall.clientTop + window.scrollY;

    let x = e.clientX - wallLeft - spider.clientWidth / 2;
    let y = e.clientY - wallTop - spider.clientHeight / 2;

    const maxX = wall.clientWidth - spider.clientWidth;
    const maxY = wall.clientHeight - spider.clientHeight;

    if (x < 0) {
      x = 0;
    } else if (x > maxX) {
      x = maxX;
    }

    if (y < 0) {
      y = 0;
    } else if (y > maxY) {
      y = maxY;
    }

    spider.style.left = `${x}px`;
    spider.style.top = `${y}px`;
  }
});
