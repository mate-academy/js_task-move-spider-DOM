'use strict';

document.body.children[0].addEventListener('click', e => {
  const spider = document.querySelector('.spider');

  const y = e.offsetY - spider.height / 2;
  const x = e.offsetX - spider.width / 2;

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
