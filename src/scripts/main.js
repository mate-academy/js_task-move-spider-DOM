'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const rect = wall.getBoundingClientRect();
  const spider = document.querySelector('.spider');

  const borderWidth = (wall.offsetWidth - wall.clientWidth) / 2;

  if (e.target === wall) {
    let x = e.clientX - rect.left - borderWidth - spider.clientWidth / 2;
    let y = e.clientY - rect.top - borderWidth - spider.clientHeight / 2;

    if (x < 0) {
      x = 0;
    }

    if (x > rect.width - spider.clientWidth - borderWidth * 2) {
      x = rect.width - spider.clientWidth - borderWidth * 2;
    }

    if (y < 0) {
      y = 0;
    }

    if (y > rect.height - spider.clientHeight - borderWidth * 2) {
      y = rect.height - spider.clientHeight - borderWidth * 2;
    }

    spider.style.left = `${x}px`;
    spider.style.top = `${y}px`;
  }
});
