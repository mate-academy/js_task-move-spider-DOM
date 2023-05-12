'use strict';

document.addEventListener('click', followMouse);

function followMouse(e) {
  if (!e.target.closest('.wall')) {
    return false;
  }

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  let y = e.offsetY;
  let x = e.offsetX;

  if (e.target.matches('.spider')) {
    y += spider.offsetTop;
    x += spider.offsetLeft;
  }

  let spiderTop = y - spider.offsetHeight / 2;
  let spiderLeft = x - spider.offsetWidth / 2;

  if (y <= spider.offsetHeight / 2) {
    spiderTop = 0;
  } else if (y >= wall.clientHeight - spider.offsetHeight / 2) {
    spiderTop = wall.clientHeight - spider.offsetHeight;
  }

  if (x <= spider.offsetWidth / 2) {
    spiderLeft = 0;
  } else if (x >= wall.clientWidth - spider.offsetWidth / 2) {
    spiderLeft = wall.clientWidth - spider.offsetWidth;
  }

  spider.style.left = spiderLeft + 'px';
  spider.style.top = spiderTop + 'px';
};
