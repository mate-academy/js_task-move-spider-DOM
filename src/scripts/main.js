'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  if (!e.target.matches('.wall')) {
    return;
  }

  const maxWidth = wall.clientWidth - spider.offsetWidth;
  const maxHeight = wall.clientHeight - spider.offsetHeight;

  const x = e.offsetX - (spider.offsetWidth / 2);
  const y = e.offsetY - (spider.offsetHeight / 2);

  spider.style.left = limitParameter(maxWidth, x) + 'px';
  spider.style.top = limitParameter(maxHeight, y) + 'px';
});

function limitParameter(limit, current) {
  if (current < 0) {
    return 0;
  }

  if (current > limit) {
    return limit;
  }

  return current;
}
