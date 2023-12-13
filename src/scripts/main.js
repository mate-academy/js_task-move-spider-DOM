'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!spider || !wall) {
    return;
  }

  const clickX = e.clientX;
  const clickY = e.clientY;
  const wallRect = wall.getBoundingClientRect();

  if (spider.clientWidth === undefined || spider.clientHeight === undefined) {
    return;
  }

  const clickXRelative = clickX - wallRect.left;
  const clickYRelative = clickY - wallRect.top;

  const spiderX = Math.max(
    0,
    Math.min(
      wall.clientWidth - spider.clientWidth,
      clickXRelative - spider.clientWidth / 2,
    ),
  );

  const spiderY = Math.max(
    0,
    Math.min(
      wall.clientHeight - spider.clientHeight,
      clickYRelative - spider.clientHeight / 2,
    ),
  );

  spider.style.left = spiderX + 'px';
  spider.style.top = spiderY + 'px';
});
