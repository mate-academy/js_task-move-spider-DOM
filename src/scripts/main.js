'use strict';
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider')

wall.addEventListener('click', event => {
  const positionY = event.clientY - wall.offsetTop;
  const positionX = event.clientX - wall.offsetLeft;
  const maxy = wall.clientHeight - spider.offsetWidth;
  const maxh = wall.clientWidth - spider.offsetHeight;

  spider.style.top = `${Math.min(positionY, maxy)}px`;
  spider.style.left =`${Math.min(positionX, maxh)}px`;
});
