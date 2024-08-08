'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  wall.style.position = 'relative';

  const rect = wall.getBoundingClientRect();

  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  if (x > 400) {
    x = 400 - 15;
  }

  if (y > 400) {
    y = 400 - 15;
  }

  if (x < 15) {
    x = 35;
  }

  if (y < 15) {
    y = 35;
  }

  if (e.target.className === 'wall') {
    spider.style.left = x - 35 + 'px';
    spider.style.top = y - 35 + 'px';
  }
});
