'use strict';

const wall = document.querySelector('.wall');
const body = wall.parentElement;
const spider = wall.querySelector('.spider');

document.addEventListener('click', e => {
  const wallTop = (body.offsetHeight - wall.offsetHeight) / 2;
  const wallLeft = (body.offsetWidth - wall.offsetWidth) / 2;
  const halfSpider = spider.offsetWidth / 2;

  if (e.clientX >= wallLeft
    && e.clientX < (wallLeft + wall.offsetWidth)
    && e.clientY >= wallTop
    && e.clientY < (wallTop + wall.offsetHeight)
  ) {
    const spiderLeft = e.clientX - wall.clientLeft - wallLeft - halfSpider;
    const spiderTop = e.clientY - wall.clientTop - wallTop - halfSpider;

    if (spiderLeft < 0) {
      spider.style.left = '0';
    } else if (wall.clientWidth < spider.offsetWidth + spiderLeft) {
      spider.style.left = (wall.clientWidth - spider.clientWidth) + 'px';
    } else {
      spider.style.left = spiderLeft + 'px';
    }

    if (spiderTop < 0) {
      spider.style.top = '0';
    } else if (wall.clientHeight < spider.offsetHeight + spiderTop) {
      spider.style.top = (wall.clientHeight - spider.clientHeight) + 'px';
    } else {
      spider.style.top = spiderTop + 'px';
    }
  }
});
