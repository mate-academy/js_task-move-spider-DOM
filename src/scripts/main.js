'use strict';

const spider = document.querySelector('.spider');
const spiderSize = spider.clientWidth;

document.addEventListener('click', e => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const gapTop = e.clientY - (wall.offsetTop + wall.clientTop);
  const gapLeft = e.clientX - (wall.offsetLeft + wall.clientLeft);

  gapTop <= spiderSize
    ? spider.style.top = '0'
    : spider.style.top = (wall.clientHeight - spiderSize) + 'px';

  gapLeft <= spiderSize
    ? spider.style.left = '0'
    : spider.style.left = (wall.clientWidth - spiderSize) + 'px';

  if (gapTop > spiderSize && gapTop <= wall.clientHeight - spiderSize) {
    spider.style.top = (gapTop - (spiderSize / 2)) + 'px';
  }

  if (gapLeft > spiderSize && gapLeft <= wall.clientWidth - spiderSize) {
    spider.style.left = (gapLeft - (spiderSize / 2)) + 'px';
  }
});
