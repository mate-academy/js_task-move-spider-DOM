'use strict';

const body = document.body;
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const positionZero = 0 + 'px';

  if (e.target === body) {
    return;
  }

  spider.style.top = e.clientY - wall.offsetTop - 35 + 'px';
  spider.style.left = e.clientX - wall.offsetLeft - 35 + 'px';

  if (e.clientY < wall.offsetTop + 35) {
    spider.style.top = positionZero;
  }

  if (e.clientY > wall.offsetTop - 15 + wall.clientHeight) {
    spider.style.top = 350 + 'px';
  }

  if (e.clientX < wall.offsetLeft + 35) {
    spider.style.left = positionZero;
  }

  if (e.clientX > wall.offsetLeft - 15 + wall.clientWidth) {
    spider.style.left = 350 + 'px';
  }
});
