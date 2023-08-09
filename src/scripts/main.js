'use strict';

document.addEventListener('click', moveSpider);

function moveSpider(clickEvent) {
  if (!clickEvent.target.closest('.wall')) {
    return false;
  }

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const clickX = clickEvent.offsetX;
  const clickY = clickEvent.offsetY;

  let leftSpider = clickX - spider.offsetWidth / 2;
  let topSpider = clickY - spider.offsetHeight / 2;

  if (clickY <= spider.offsetHeight / 2) {
    topSpider = 0;
  } else if (clickY >= wall.clientHeight - spider.offsetHeight / 2) {
    topSpider = wall.clientHeight - spider.offsetHeight;
  }

  if (clickX <= spider.offsetWidth / 2) {
    leftSpider = 0;
  } else if (clickX >= wall.clientWidth - spider.offsetWidth / 2) {
    leftSpider = wall.clientWidth - spider.offsetWidth;
  }

  spider.style.top = topSpider + 'px';
  spider.style.left = leftSpider + 'px';
};
