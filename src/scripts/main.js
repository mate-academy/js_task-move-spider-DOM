'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  let cordX;
  let cordY;

  let spiderTop;
  let spiderLeft;

  if (e.offsetX < 0) {
    cordX = 0;
    spiderLeft = cordX;
  } else if (e.offsetX >= maxX) {
    cordX = maxX;
    spiderLeft = cordX;
  } else {
    cordX = e.offsetX;
    spiderLeft = cordX - spider.offsetWidth / 2;
  }

  if (e.offsetY < 0) {
    cordY = 0;
    spiderTop = cordY;
  } else if (e.offsetY >= maxY) {
    cordY = maxY;
    spiderTop = cordY;
  } else {
    cordY = e.offsetY;
    spiderTop = cordY - spider.offsetHeight / 2;
  }

  spider.style.cssText = `top: ${spiderTop}px; left: ${spiderLeft}px;`;
});
