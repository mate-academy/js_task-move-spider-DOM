'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  if (!e.target.matches('.wall')) {
    return;
  }

  const limitWidth = wall.clientWidth - spider.offsetWidth;
  const limitHeight = wall.clientHeight - spider.offsetHeight;
  let spiderPositionX = e.offsetX - (spider.offsetWidth / 2);
  let spiderPositionY = e.offsetY - (spider.offsetHeight / 2);

  if (spiderPositionX < 0) {
    spiderPositionX = 0;
  }

  if (spiderPositionX > limitWidth) {
    spiderPositionX = limitWidth;
  }

  if (spiderPositionY < 0) {
    spiderPositionY = 0;
  }

  if (spiderPositionY > limitHeight) {
    spiderPositionY = limitHeight;
  }

  spider.style.top = spiderPositionY + 'px';
  spider.style.left = spiderPositionX + 'px';
});
