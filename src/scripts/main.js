'use strict';

document.addEventListener('click', (e) => {
  e.preventDefault();

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallLeft = wall.offsetLeft;
  const wallTop = wall.offsetTop;
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const clickX = e.clientX;
  const clickY = e.clientY;

  const borderWidth = wall.offsetWidth - wall.clientWidth;

  if (
    clickX >= wallLeft - borderWidth &&
    clickX <= wallLeft + wallWidth + borderWidth &&
    clickY >= wallTop - borderWidth &&
    clickY <= wallTop + wallHeight + borderWidth
  ) {
    let newLeft = clickX - wallLeft - spiderWidth / 2 - borderWidth / 2;
    let newTop = clickY - wallTop - spiderHeight / 2 - borderWidth / 2;

    if (newLeft < 0) {
      newLeft = 0;
    } else if (newLeft + spiderWidth > wallWidth) {
      newLeft = wallWidth - spiderWidth;
    }

    if (newTop < 0) {
      newTop = 0;
    } else if (newTop + spiderHeight > wallHeight) {
      newTop = wallHeight - spiderHeight;
    }

    spider.style.left = `${newLeft}px`;
    spider.style.top = `${newTop}px`;
  }
});
