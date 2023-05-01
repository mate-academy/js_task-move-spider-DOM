'use strict';

document.addEventListener('click', (e) => {
  const body = document.body;
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const positionZero = 0 + 'px';

  if (e.target === body) {
    return;
  }

  spider.style.top = e.clientY - wall.offsetTop - 35 + 'px';
  spider.style.left = e.clientX - wall.offsetLeft - 35 + 'px';

  if (spider.style.top <= positionZero) {
    spider.style.top = positionZero;
  }

  if (spider.style.left <= positionZero) {
    spider.style.left = positionZero;
  }

  if (spider.style.left >= 350 + 'px') {
    spider.style.left = 350 + 'px';
  }

  if (spider.style.top >= 350 + 'px') {
    spider.style.top = 350 + 'px';
  }
});
