'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');

  spider.style.top = `${e.offsetY}px`;
  spider.style.left = `${e.offsetX}px`;
});
