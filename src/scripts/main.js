'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallParam = wall.getBoundingClientRect();
  const spiderSize = spider.getBoundingClientRect();

  if (e.target.closest('.wall')) {
    let x = e.clientX - wallParam.left - wall.clientTop - spiderSize.width / 2;

    let y = e.clientY - wallParam.top - wall.clientTop - spiderSize.height / 2;

    if (x < 0) {
      x = 0;
    } else if (x > wall.clientWidth - spider.clientWidth) {
      x = wall.clientWidth - spider.clientWidth;
    }

    if (y < 0) {
      y = 0;
    } else if (y > wall.clientHeight - spider.clientHeight) {
      y = wall.clientHeight - spider.clientWidth;
    }

    spider.style.left = x + 'px';
    spider.style.top = y + 'px';
  }
});
