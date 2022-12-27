'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target === wall) {
    spider.style.left = `${e.offsetX}px`;
    spider.style.top = `${e.offsetY}px`;
    spider.style.transform = 'translate(-50%, -50%)';

    if (e.offsetX < 25) {
      spider.style.left = '25px';
    }

    if (e.offsetX > 375) {
      spider.style.left = '375px';
    }

    if (e.offsetY < 25) {
      spider.style.top = '25px';
    }

    if (e.offsetY > 375) {
      spider.style.top = '375px';
    }
  };
});
