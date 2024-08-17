'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const rect = wall.getBoundingClientRect();
  const wallStyles = window.getComputedStyle(wall);

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const borderLeftWidth = parseInt(wallStyles.borderLeftWidth, 10);
  const borderTopWidth = parseInt(wallStyles.borderTopWidth, 10);

  let x = e.clientX - rect.left - borderLeftWidth - spiderWidth / 2;
  let y = e.clientY - rect.top - borderTopWidth - spiderHeight / 2;

  if (
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom
  ) {
    x = Math.max(
      0,
      Math.min(x, rect.width - spiderWidth - borderLeftWidth * 2),
    );

    y = Math.max(
      0,
      Math.min(y, rect.height - spiderHeight - borderTopWidth * 2),
    );

    spider.style.left = `${x}px`;
    spider.style.top = `${y}px`;
  }
});
