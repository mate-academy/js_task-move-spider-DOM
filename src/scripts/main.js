'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const initialX = wall.offsetLeft;
  const initialY = wall.offsetTop;

  spider.style.left = e.clientX - initialX + 'px';
  spider.style.top = e.clientY - initialY + 'px';
});
