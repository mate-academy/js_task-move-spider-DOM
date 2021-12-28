'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const coordSp = spider.getBoundingClientRect();
  const coordWl = wall.getBoundingClientRect();
  const border =
  parseInt(getComputedStyle(wall).getPropertyValue('border-top-width'));

  const x = e.clientX - coordWl.left - border;
  const y = e.clientY - coordWl.top - border;

  const coordTop = y - coordSp.width / 2;
  const coordLeft = x - coordSp.height / 2;

  spider.style.top = coordTop + 'px';
  spider.style.left = coordLeft + 'px';
});
