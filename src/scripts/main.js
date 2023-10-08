'use strict';

const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target.className !== 'wall') {
    return;
  }

  spider.style.top = `${e.offsetY - spider.clientHeight / 2}px`;
  spider.style.left = `${e.offsetX - spider.clientWidth / 2}px`;
});
