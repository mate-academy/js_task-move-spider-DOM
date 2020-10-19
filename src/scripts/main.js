'use strict';

const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const wall = e.target.closest('.wall');

  if (!wall || e.target === spider) {
    return;
  }

  spider.style.left = `${e.offsetX - spider.offsetWidth / 2}px`;
  spider.style.top = `${e.offsetY - spider.offsetHeight / 2}px`;

  if (e.offsetX <= spider.offsetWidth / 2) {
    spider.style.left = '0px';
  }

  if (e.offsetY <= spider.offsetHeight / 2) {
    spider.style.top = '0px';
  }

  if (e.offsetX >= wall.clientWidth - spider.offsetWidth / 2) {
    spider.style.left = `${wall.clientWidth - spider.offsetWidth}px`;
  }

  if (e.offsetY >= wall.clientHeight - spider.offsetHeight / 2) {
    spider.style.top = `${wall.clientHeight - spider.offsetHeight}px`;
  }
});
