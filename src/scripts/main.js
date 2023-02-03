'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!e.target.matches('.wall')) {
    return;
  };

  const maxWidth = wall.clientWidth - spider.offsetWidth;
  const maxHeight = wall.clientHeight - spider.offsetWidth;

  let spiderPositionX = e.offsetX - (spider.offsetWidth / 2);
  let spiderPositionY = e.offsetY - (spider.offsetHeight / 2);

  if (spiderPositionX < 0) {
    spiderPositionX = 0;
  }

  if (spiderPositionX > maxWidth) {
    spiderPositionX = maxWidth;
  }

  if (spiderPositionY < 0) {
    spiderPositionY = 0;
  }

  if (spiderPositionY > maxHeight) {
    spiderPositionY = maxHeight;
  }

  spider.style.top = spiderPositionY + 'px';
  spider.style.left = spiderPositionX + 'px';
});
