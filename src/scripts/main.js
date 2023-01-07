'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const leftPosititon = e.offsetX - spider.offsetWidth / 2;
  const topPosititon = e.offsetY - spider.offsetHeight / 2;
  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  const coords = {
    x: leftPosititon > maxLeft ? maxLeft : leftPosititon,
    y: topPosititon > maxTop ? maxTop : topPosititon,
  };

  if (coords.x < 0) {
    coords.x = 0;
  }

  if (coords.y < 0) {
    coords.y = 0;
  }

  spider.style.left = coords.x + 'px';
  spider.style.top = coords.y + 'px';
});
