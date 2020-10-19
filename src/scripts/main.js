'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  let spiderX = e.offsetX - spider.offsetWidth / 2;
  let spiderY = e.offsetY - spider.offsetHeight / 2;

  if (!e.target.closest('.wall')) {
    return;
  }

  if (spiderX < 0) {
    spiderX = 0;
  }

  if (spiderX > wall.clientWidth - spider.offsetWidth) {
    spiderX = wall.clientWidth - spider.offsetWidth;
  }

  if (spiderY < 0) {
    spiderY = 0;
  }

  if (spiderY > wall.clientHeight - spider.offsetHeight) {
    spiderY = wall.clientHeight - spider.offsetHeight;
  }

  spider.style.left = spiderX + 'px';
  spider.style.top = spiderY + 'px';
});
