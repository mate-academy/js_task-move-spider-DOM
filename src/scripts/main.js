'use strict';

document.addEventListener('click', el => {
  const spider = document.querySelector('.spider');
  const box = el.target;
  let x = el.offsetX - spider.clientWidth / 2;
  let y = el.offsetY - spider.clientHeight / 2;

  if (x < 0) {
    x = 0;
  } else if (el.offsetX > box.clientWidth) {
    x = box.clientWidth - spider.clientWidth;
  }

  if (y < 0) {
    y = 0;
  } else if (el.offsetY > box.clientHeight) {
    y = box.clientHeight - spider.clientHeight;
  }

  if (box.classList.value === 'wall') {
    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  }
});
