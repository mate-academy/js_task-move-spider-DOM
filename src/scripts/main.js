'use strict';

document.addEventListener('click', e => {
  const clickOnTheWall = e.target.closest('.wall');

  if (!clickOnTheWall) {
    return;
  }

  const wall = document.querySelector('.wall');
  const coordsWall = wall.getBoundingClientRect();
  const spider = document.querySelector('.spider');
  let spiderTop = e.clientY - coordsWall.top + wall.clientTop
    - (spider.offsetHeight / 1.15);
  let spiderLeft = e.clientX - coordsWall.left + wall.clientLeft
  - (spider.offsetWidth / 1.15);

  if (e.clientY < coordsWall.top + wall.clientTop + (spider.offsetHeight / 2)) {
    spiderTop = wall.clientTop - (spider.offsetHeight / 5);
  }

  if (e.clientY > wall.clientTop + wall.clientHeight
    - (spider.offsetHeight / 10)) {
    spiderTop = wall.clientTop + wall.clientHeight
    - (spider.offsetHeight * 1.2);
  }

  if (e.clientX < coordsWall.left + wall.clientLeft
    + (spider.offsetWidth / 2)) {
    spiderLeft = wall.clientLeft - (spider.offsetWidth / 5);
  }

  if (e.clientX > coordsWall.left + wall.clientLeft
    + wall.clientWidth - (spider.offsetWidth / 2)) {
    spiderLeft = wall.clientLeft + wall.clientWidth
    - (spider.offsetWidth * 1.2);
  }

  spider.style.cssText = `top: ${spiderTop}px;
    left: ${spiderLeft}px;
  `;
});
