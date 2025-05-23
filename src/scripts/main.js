'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderSize = parseInt(getComputedStyle(spider).height, 10);

document.addEventListener('click', (e) => {
  const wallBorder = parseInt(getComputedStyle(wall).borderWidth, 10);
  const wallRect = wall.getBoundingClientRect();

  if (e.target.closest('.wall')) {
    let vertShift = e.clientY - wallRect.top - wallBorder - spiderSize / 2;
    let horizShift = e.clientX - wallRect.left - wallBorder - spiderSize / 2;

    const maxLeft = wall.clientWidth - spiderSize;
    const maxTop = wall.clientHeight - spiderSize;

    horizShift = Math.max(0, Math.min(horizShift, maxLeft));
    vertShift = Math.max(0, Math.min(vertShift, maxTop));

    spider.style.top = vertShift + 'px';
    spider.style.left = horizShift + 'px';
  }
});
