'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const table = document.getElementsByClassName('wall')[0];
  const spider = document.getElementsByClassName('spider')[0];

  if (e.target.closest('.wall')) {
    const coords = { x: e.clientX, y: e.clientY };
    const rect = table.getBoundingClientRect();

    if (coords.x + spider.clientWidth / 1.5 > rect.width + rect.x) {
      spider.style.left = `${Math.floor(rect.width + rect.x - spider.clientWidth - 20 - rect.x)}px`;
    } else if (coords.x - rect.x < spider.clientWidth) {
      spider.style.left = 0;
    } else {
      spider.style.left = `${Math.floor(coords.x - rect.x - spider.clientWidth / 1.5 - 1)}px`;
    }

    if (coords.y + spider.clientHeight / 1.5 > rect.height + rect.y) {
      spider.style.top = `${Math.floor(rect.height + rect.y - spider.clientHeight - 20 - rect.y)}px`;
    } else if (coords.y - rect.y < spider.clientHeight) {
      spider.style.top = 0;
    } else {
      spider.style.top = `${Math.floor(coords.y - rect.y - spider.clientHeight / 1.5 - 1)}px`;
    }
  }
});
