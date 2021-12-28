'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const coordSp = spider.getBoundingClientRect();
  const coordWl = wall.getBoundingClientRect();
  const border
  = parseInt(getComputedStyle(wall).getPropertyValue('border-top-width'));

  const x = e.clientX - coordWl.left - border;
  const y = e.clientY - coordWl.top - border;

  let coordTop = y - coordSp.width / 2;
  let coordLeft = x - coordSp.height / 2;

  if (coordTop < 0) {
    coordTop = 0;
  } else if (coordTop > coordWl.height - border - coordSp.height - border) {
    coordTop = coordWl.height - border - coordSp.height - border;
  }

  if (coordLeft < 0) {
    coordLeft = 0;
  } else if (coordLeft > coordWl.width - border - coordSp.width - border) {
    coordLeft = coordWl.width - border - coordSp.width - border;
  }

  spider.style.top = coordTop + 'px';
  spider.style.left = coordLeft + 'px';
});
