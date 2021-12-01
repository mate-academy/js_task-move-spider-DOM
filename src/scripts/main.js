'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');

  if (e.target.tagName === spider.closest('.wall').tagName) {
    spider.style.position = 'sticky';
    spider.style.left = e.clientX + -25 + 'px';
    spider.style.top = e.clientY + -25 + 'px';
  }
});
