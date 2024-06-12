'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  let newLeft = e.clientX - wallRect.left - spiderRect.width / 2;
  let newTop = e.clientY - wallRect.top - spiderRect.height / 2;

  // Перевірка на межі стінки
  if (newLeft < 0) {
    newLeft = 0;
  } else if (newLeft + spiderRect.width > wallRect.width) {
    newLeft = wallRect.width - spiderRect.width;
  }

  if (newTop < 0) {
    newTop = 0;
  } else if (newTop + spiderRect.height > wallRect.height) {
    newTop = wallRect.height - spiderRect.height;
  }

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
