'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallSize = {
  width: wall.clientWidth,
  height: wall.clientHeight,
};

const spiderSize = {
  width: spider.clientWidth,
  height: spider.clientHeight,
};

const maxX = wallSize.width - spiderSize.width;
const maxY = wallSize.height - spiderSize.height;

wall.addEventListener('click', (e) => {
  if (e.target !== wall) {
    return;
  }

  const clickY = e.offsetY;
  const clickX = e.offsetX;

  const coordX = Math.max(0, Math.min(clickX - spiderSize.width / 2, maxX));
  const coordY = Math.max(0, Math.min(clickY - spiderSize.height / 2, maxY));

  spider.style.top = `${coordY}px`;
  spider.style.left = `${coordX}px`;
});
