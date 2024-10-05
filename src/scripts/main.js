'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const { left: wallLeft, top: wallTop } = wall.getBoundingClientRect();
  const { height: spiderHeight, width: spiderWidth } =
    spider.getBoundingClientRect();
  const padding = wall.clientLeft;

  const x = Math.max(
    0,
    Math.min(
      e.clientX - wallLeft - spiderWidth / 2 - padding,
      wall.clientWidth - spiderWidth,
    ),
  );

  const y = Math.max(
    0,
    Math.min(
      e.clientY - wallTop - spiderHeight / 2 - padding,
      wall.clientHeight - spiderHeight,
    ),
  );

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
