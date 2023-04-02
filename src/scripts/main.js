'use strict';

const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const wall = e.target.closest('.wall');

  if (wall) {
    const newTop = e.clientY - (wall.offsetTop + wall.clientTop);
    const newLeft = e.clientX - (wall.offsetLeft + wall.clientLeft);

    const calculatedTop = newTop - spider.offsetHeight / 2;
    const calculatedLeft = newLeft - spider.offsetWidth / 2;

    const wallStart = 0;
    const wallEnd = wall.clientWidth - spider.offsetWidth;

    spider.style.top
      = Math.min(Math.max(calculatedTop, wallStart), wallEnd) + 'px';

    spider.style.left
      = Math.min(Math.max(calculatedLeft, wallStart), wallEnd) + 'px';
  }
});
