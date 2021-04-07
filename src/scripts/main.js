'use strict';

document.addEventListener('click', e => {
  const item = e.target;
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!item.classList.contains('wall')) {
    return;
  }

  spider.style.top = `${e.clientY - wall.offsetTop
    - (parseFloat(getComputedStyle(spider).height) / 2)}px`;

  spider.style.left = `${e.clientX - wall.offsetLeft
    - (parseFloat(getComputedStyle(spider).width) / 2)}px`;
});
