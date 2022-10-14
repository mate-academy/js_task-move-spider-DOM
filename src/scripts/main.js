'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderSize = spider.offsetWidth;

const limitAxis = {
  x: wall.clientWidth - spiderSize,
  y: wall.clientHeight - spiderSize,
};

document.addEventListener('click', e => {
  let [x, y] = [ e.offsetX, e.offsetY ]
    .map(i => i - spiderSize / 2);

  if (!e.target.closest('.wall')) {
    return;
  };

  if (x > limitAxis.x) {
    x = limitAxis.x;
  } else if (x < 0) {
    x = 0;
  };

  if (y > limitAxis.y) {
    y = limitAxis.y;
  } else if (y < 0) {
    y = 0;
  };

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});

spider.style.pointerEvents = 'none';
