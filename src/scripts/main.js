'use strict';

document.addEventListener('click', (e) => {
  let wall = document.querySelector('.wall');
  let spider = document.querySelector('.spider');
  
  
  if (e.target !== wall) {
    return;
  }

  let x = e.offsetX - spider.clientWidth / 2;
  let y = e.offsetY - spider.clientHeight / 2;

  const min = 0;
  const max = wall.clientWidth - spider.clientWidth;

  if (x < min) {
    x = min;
  }

  if (y < min) {
    y = min;
  }

  if (x > max) {
    x = max;
  }

  if (y > max) {
    y = max;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
