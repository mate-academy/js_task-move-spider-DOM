'use strict';

const wall = document.querySelector('.wall');

const spider = document.querySelector('.spider');

document.addEventListener('click', e => {

  const element = document.elementFromPoint(e.clientX, e.clientY);

  if (element === wall) {

    const maxX = wall.clientWidth - spider.clientWidth;
    const maxY = wall.clientHeight - spider.clientHeight;

    const posX = e.offsetX - spider.clientWidth / 2 ;
    const posY = e.offsetY - spider.clientHeight / 2  ;

    spider.style.left = `${Math.max(Math.min(maxX, posX), 0)}px`;
    spider.style.top = `${Math.max(Math.min(maxY, posY), 0)}px`;

  }
});
