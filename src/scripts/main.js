'use strict';

document.addEventListener('click', e => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  }

  spider.style.left = (e.offsetX - spider.clientWidth / 2) + 'px';

  spider.style.top = (e.offsetY - spider.clientHeight / 2) + 'px';

  if (spider.style.left < 0 + 'px') {
    spider.style.left = 0 + 'px';
  }

  if (spider.style.top < 0 + 'px') {
    spider.style.top = 0 + 'px';
  }

  if ((parseInt(spider.style.left) + spider.clientWidth) > wall.clientWidth) {
    spider.style.left = wall.clientWidth - spider.clientWidth + 'px';
  }

  if ((parseInt(spider.style.top) + spider.clientHeight) > wall.clientHeight) {
    spider.style.top = wall.clientHeight - spider.clientHeight + 'px';
  }
});
