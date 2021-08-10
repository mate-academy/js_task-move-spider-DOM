'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target !== wall) {
    return;
  };

  let rectY = e.pageY - wall.clientTop - wall.offsetTop;
  let rectX = e.pageX - wall.clientLeft - wall.offsetLeft;
  const lastPointX = wall.clientHeight - spider.clientHeight;
  const lastPointY = wall.clientWidth - spider.clientWidth;

  if (rectY < (spider.clientHeight / 2)) {
    rectY = 0;
  };

  if (rectX < (spider.clientWidth / 2)) {
    rectX = 0;
  };

  if (rectY > lastPointX) {
    rectY = lastPointX;
  };

  if (rectX > lastPointY) {
    rectX = lastPointY;
  };

  spider.style.top = rectY + 'px';
  spider.style.left = rectX + 'px';
});
