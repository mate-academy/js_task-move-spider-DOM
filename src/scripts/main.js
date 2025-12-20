'use strict';

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');
  const spider = document.querySelector('.spider');

  if (!wall) {
    return;
  }

  spider.style.position = 'fixed';
  spider.style.top = `${e.clientY - spider.offsetHeight / 2}px`;
  spider.style.left = `${e.clientX - spider.offsetWidth / 2}px`;
});
