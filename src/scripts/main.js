'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const coordYmax = wall.clientHeight - spider.clientHeight;
  const coordXmax = wall.clientWidth - spider.clientWidth;
  const coordY = e.offsetY - (spider.clientHeight / 2);
  const coordX = e.offsetX - (spider.clientWidth / 2);

  if (coordX < 0) {
    spider.style.left = 0 + 'px';
  } else {
    spider.style.left = `${coordX}px`;
  }

  if (coordX > coordXmax) {
    spider.style.left = `${coordXmax}px`;
  }

  if (coordY < 0) {
    spider.style.top = '0px';
  } else {
    spider.style.top = `${coordY}px`;
  }

  if (coordY > coordYmax) {
    spider.style.top = `${coordYmax}px`;
  }
});
