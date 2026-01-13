'use strict';

const spider = document.querySelector('img.spider');

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'DIV') {
    const place = [e.clientX, e.clientY];
    const wallX = e.target.getBoundingClientRect().x;
    const wallY = e.target.getBoundingClientRect().y;
    const wallWidth = e.target.getBoundingClientRect().width;
    const wallHeight = e.target.getBoundingClientRect().height;
    const spiderWidth = spider.getBoundingClientRect().width;
    const spiderHeight = spider.getBoundingClientRect().height;
    const borderLeft = e.target.clientLeft;
    const borderTop = e.target.clientTop;
    let newLeft = place[0] - wallX - spiderWidth / 2 - borderLeft;
    let newTop = place[1] - wallY - spiderHeight / 2 - borderTop;

    if (
      newLeft >= 0 &&
      newTop >= 0 &&
      newLeft + spiderWidth <= wallWidth - borderLeft * 2 &&
      newTop + spiderHeight <= wallHeight - borderTop * 2
    ) {
      spider.style.left = `${newLeft}px`;
      spider.style.top = `${newTop}px`;
    } else {
      if (newLeft + spiderWidth > wallWidth - borderLeft * 2) {
        newLeft = wallWidth - borderLeft * 2 - spiderWidth;
        spider.style.left = `${newLeft}px`;
      }

      if (newLeft < 0) {
        newLeft = 0;
        spider.style.left = `${newLeft}px`;
      }

      if (newTop + spiderHeight > wallHeight - borderTop * 2) {
        newTop = wallHeight - borderTop * 2 - spiderHeight;
        spider.style.top = `${newTop}px`;
      }

      if (newTop < 0) {
        newTop = 0;
        spider.style.top = `${newTop}px`;
      }
      spider.style.left = `${newLeft}px`;
      spider.style.top = `${newTop}px`;
    }
  }
});
