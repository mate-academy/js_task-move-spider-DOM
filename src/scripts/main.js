'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const borderWidth = parseInt(getComputedStyle(wall).borderWidth);

wall.addEventListener('click', (e) => {
  if (e.target === wall) {
    const pos = wall.getBoundingClientRect();
    const width = spider.offsetWidth;
    const height = spider.offsetHeight;

    let x = e.clientX - pos.left - width / 2 - borderWidth;
    let y = e.clientY - pos.top - height / 2 - borderWidth;

    if (x < 0) {
      x = 0;
    }

    if (y < 0) {
      y = 0;
    }

    if (x + width > pos.width - 2 * borderWidth) {
      x = pos.width - width - 2 * borderWidth;
    }

    if (y + height > pos.height - 2 * borderWidth) {
      y = pos.height - height - 2 * borderWidth;
    }

    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  }
});
