'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target.closest('.wall')) {
    const x = e.clientX;
    const y = e.clientY;
    const spiderMeasure = spider.getBoundingClientRect();
    const spiderH = spiderMeasure.height;
    const spiderW = spiderMeasure.width;
    const wallMesuare = wall.getBoundingClientRect();

    let newLeft = x - wallMesuare.left - wall.clientLeft - spiderW / 2;
    let newTop = y - wallMesuare.top - wall.clientTop - spiderH / 2;

    const maxLeft = wall.clientWidth - spiderW;
    const maxTop = wall.clientHeight - spiderH;

    newLeft = Math.max(0, Math.min(newLeft, maxLeft));
    newTop = Math.max(0, Math.min(newTop, maxTop));
    spider.style.left = newLeft + 'px';
    spider.style.top = newTop + 'px';
  }
});
