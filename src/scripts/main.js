'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const container = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const spiderX = spider.offsetWidth / 2;
  const spiderY = spider.offsetHeight / 2;
  let x = e.clientX;
  let y = e.clientY;
  const rect = container.getBoundingClientRect();

  if (x - spiderX < rect.left) {
    x = rect.left + spiderX;
  }

  if (x + spiderX > rect.right) {
    x = rect.right - spiderX;
  }

  if (y - spiderY < rect.top) {
    y = rect.top + spiderY;
  }

  if (y + spiderY > rect.bottom) {
    y = rect.bottom - spiderY;
  }

  spider.style.left = `${x - rect.left - spiderX}px`;
  spider.style.top = `${y - rect.top - spiderY}px`;
});
