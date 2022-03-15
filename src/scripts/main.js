'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');

  spider.style.left = e.clientX + 'px';
  spider.style.top = e.clientY + 'px';
});
