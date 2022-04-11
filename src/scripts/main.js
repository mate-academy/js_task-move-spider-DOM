'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  let coordsX = e.offsetX - spider.clientWidth / 2;
  let coordsY = e.offsetY - spider.clientHeight / 2;

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  coordsX = Math.min(Math.max(coordsX, 0), maxX);
  coordsY = Math.min(Math.max(coordsY, 0), maxY);

  if (!e.target.classList.contains('wall')) {
    return;
  }

  spider.style.top = coordsY + 'px';
  spider.style.left = coordsX + 'px';
});
