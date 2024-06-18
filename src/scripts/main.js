'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const target = e.target;

  if (target === wall) {
    const wallRect = wall.getBoundingClientRect();

    const wallOffsetLeft = wallRect.left + window.scrollX;
    const wallOffsetTop = wallRect.top + window.scrollY;

    const wallBorderLeft = wall.clientLeft;
    const wallBorderTop = wall.clientTop;

    const spiderWidth = spider.clientWidth;
    const spiderHeight = spider.clientHeight;

    let newLeft = e.clientX - wallOffsetLeft - spiderWidth / 2 - wallBorderLeft;
    let newTop = e.clientY - wallOffsetTop - spiderHeight / 2 - wallBorderTop;

    const maxX = wall.clientWidth - spiderWidth;
    const maxY = wall.clientHeight - spiderHeight;

    if (newLeft < 0) {
      newLeft = 0;
    } else if (newLeft > maxX) {
      newLeft = maxX;
    }

    if (newTop < 0) {
      newTop = 0;
    } else if (newTop > maxY) {
      newTop = maxY;
    }

    spider.style.left = `${newLeft}px`;
    spider.style.top = `${newTop}px`;
  }
});
