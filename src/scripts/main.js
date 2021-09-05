'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallStyle = getComputedStyle(wall);
  const wallHeight = parseInt(wallStyle.height);
  const wallWidth = parseInt(wallStyle.width);

  const x = e.clientX;
  const y = e.clientY;

  const wallTop = wall.offsetTop;
  const wallLeft = wall.offsetLeft;

  const border = parseInt(wallStyle.borderTop);

  const spiderSize = parseInt(spider.width / 2);

  if (e.target === wall) {
    spider.style.left = `${x - wallLeft - border - spiderSize}px`;
    spider.style.top = `${y - wallTop - border - spiderSize}px`;

    if (x <= wallLeft + spiderSize + border) {
      spider.style.left = `${0}px`;
    }

    if (y <= wallTop + spiderSize + border) {
      spider.style.top = `${0}px`;
    }

    if (x >= wallWidth + wallLeft - spiderSize - border) {
      spider.style.left = `${wallWidth - spiderSize - border * 2.5}px`;
    }

    if (y >= wallHeight + wallTop - spiderSize - border) {
      spider.style.top = `${wallHeight - spiderSize - border * 2.5}px`;
    }
  }
});
