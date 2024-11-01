'use strict';

document.addEventListener('click', (e) => {
  // write code here
});

const spider = document.getElementById('spider');
const wall = document.getElementById('wall');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  let newLeft = e.clientX - spiderRect.width / 2;
  let newTop = e.clientY - spiderRect.height / 2;

  if (newLeft < wallRect.left) {
    newLeft = wallRect.left;
  } else if (newLeft + spiderRect.width > wallRect.right) {
    newLeft = wallRect.right - spiderRect.width;
  }

  if (newTop < wallRect.top) {
    newTop = wallRect.top;
  } else if (newTop + spiderRect.height > wallRect.bottom) {
    newTop = wallRect.bottom - spiderRect.height;
  }

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
