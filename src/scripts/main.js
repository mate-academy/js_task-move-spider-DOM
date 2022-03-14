'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');

  spider.left = e.clientX;

  spider.top = e.clientY;
});
