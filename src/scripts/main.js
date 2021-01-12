'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  let spiderCoordsX = (e.clientX - wall.offsetLeft
    - wall.clientLeft - spider.clientWidth / 2);
  let spiderCoordsY = (e.clientY - wall.offsetTop
     - wall.clientTop - spider.clientHeight / 2);

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  spiderCoordsX = spiderCoordsX < 0 ? 0 : spiderCoordsX;
  spiderCoordsY = spiderCoordsY < 0 ? 0 : spiderCoordsY;
  spiderCoordsX = spiderCoordsX > maxX ? maxX : spiderCoordsX;
  spiderCoordsY = spiderCoordsY > maxY ? maxY : spiderCoordsY;

  spider.style.left = spiderCoordsX + 'px';
  spider.style.top = spiderCoordsY + 'px';
});
