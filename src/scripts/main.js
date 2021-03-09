'use strict';

document.addEventListener('click', e => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const halfOfSpider = spider.clientHeight / 2;
  const field = wall.clientWidth - spider.clientHeight;

  if (e.target.className !== 'wall') {
    return;
  }

  const arr = [e.offsetY, e.offsetX];
  const coordinats = arr.map(el => {
    const position = el - halfOfSpider;

    if (position > field) {
      return field;
    } else if (position < 0) {
      return 0;
    }

    return position;
  });

  spider.style.top = coordinats[0] + 'px';
  spider.style.left = coordinats[1] + 'px';
});
