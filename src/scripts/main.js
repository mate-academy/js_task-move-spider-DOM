'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  let newLeft = e.clientX - wallRect.left - spiderRect.width / 2;
  let newTop = e.clientY - wallRect.top - spiderRect.height / 2;

  if (newLeft < 0) {
    newLeft = 0;
  } else if (newLeft > 400 - spiderRect.width) {
    newLeft = 400 - spiderRect.width;
  }

  if (newTop < 0) {
    newTop = 0;
  } else if (newTop > 400 - spiderRect.height) {
    newTop = 400 - spiderRect.height;
  }

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
