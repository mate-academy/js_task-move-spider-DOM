'use strict';

const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  // write code here
  const element = document.elementFromPoint(e.clientX, e.clientY);

  if (!element.classList.contains('wall')) {
    return;
  }

  spider.style.top = `${e.clientY - element.offsetTop}px`;
  spider.style.left = `${e.clientX - element.offsetLeft}px`;
});
