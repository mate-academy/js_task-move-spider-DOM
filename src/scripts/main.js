'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  const wallCoordsTop = wall.offsetTop + wall.clientTop;
  const wallCoordsLeft = wall.offsetLeft + wall.clientLeft;

  let spiderCoordsTop = e.clientY - wallCoordsTop - spider.clientHeight / 2;
  let spiderCoordsLeft = e.clientX - wallCoordsLeft - spider.clientWidth / 2;

  if (spiderCoordsTop < 0) {
    spiderCoordsTop = 0;
  };

  if (spiderCoordsTop + spider.clientHeight > wall.clientHeight) {
    spiderCoordsTop = wall.clientHeight - spider.clientHeight;
  };

  if (spiderCoordsLeft < 0) {
    spiderCoordsLeft = 0;
  };

  if (spiderCoordsLeft + spider.clientWidth > wall.clientWidth) {
    spiderCoordsLeft = wall.clientWidth - spider.clientWidth;
  };

  spider.style.left = `${spiderCoordsLeft}px`;
  spider.style.top = `${spiderCoordsTop}px`;
});
