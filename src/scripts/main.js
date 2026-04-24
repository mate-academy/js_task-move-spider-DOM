'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  spider.style.boxSizing = 'border-box';

  const coord = wall.getBoundingClientRect();
  const spiderSize = spider.getBoundingClientRect();

  let xc = e.clientX - coord.left - spiderSize.width / 2;
  let yc = e.clientY - coord.top - spiderSize.height / 2;

  if (xc <= 0) {
    xc = 0;
  }

  if (yc < 0) {
    yc = 0;
  }

  const rightEdge = coord.width - spiderSize.width;
  const bottomEdge = coord.height - spiderSize.height;

  if (xc > rightEdge) {
    xc = rightEdge;
  }

  if (yc > bottomEdge) {
    yc = bottomEdge;
  }

  spider.style.position = 'absolute';
  spider.style.left = xc + 'px';
  spider.style.top = yc + 'px';
});
