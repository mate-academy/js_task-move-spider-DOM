'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!e.target.matches('.wall')) {
    return;
  }

  let coordX = 0;
  let coordY = 0;

  const indentBorderX = wall.offsetLeft + wall.clientLeft;
  const indentBorderY = wall.offsetTop + wall.clientTop;

  const minX = indentBorderX + spider.offsetWidth / 2;
  const maxX = indentBorderX + wall.clientWidth - spider.offsetWidth / 2;
  const minY = indentBorderY + spider.offsetWidth / 2;
  const maxY = indentBorderY + wall.clientWidth - spider.offsetHeight / 2;

  coordX = e.clientX < minX ? 0
    : e.clientX > maxX ? wall.clientWidth - spider.offsetWidth
      : e.clientX - indentBorderX - spider.offsetWidth / 2;

  coordY = e.clientY < minY ? 0
    : e.clientY > maxY ? wall.clientHeight - spider.offsetHeight
      : e.clientY - indentBorderY - spider.offsetHeight / 2;
      
  spider.style.left = coordX + 'px';
  spider.style.top = coordY + 'px';
});
