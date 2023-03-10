'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', evnt => {
  let spiderCoordsTop = evnt.offsetY - spider.height / 2;
  let spiderCoordsLeft = evnt.offsetX - spider.width / 2;

  if (spiderCoordsTop < 0) {
    spiderCoordsTop = 0;
  }

  if (spiderCoordsLeft < 0) {
    spiderCoordsLeft = 0;
  }

  if (evnt.offsetY > wall.clientHeight) {
    spiderCoordsTop = wall.clientHeight - spider.height;
  }

  if (evnt.offsetX > wall.clientWidth) {
    spiderCoordsLeft = wall.clientWidth - spider.width;
  }

  spider.style.top = spiderCoordsTop + 'px';
  spider.style.left = spiderCoordsLeft + 'px';
});
