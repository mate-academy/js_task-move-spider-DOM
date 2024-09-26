/* eslint-disable no-shadow */
'use strict';

document.addEventListener('click', function (event) {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const clickX = event.clientX - wall.offsetLeft;
  const clickY = event.clientY - wall.offsetTop;

  let spiderX = clickX - spider.offsetWidth / 2;
  let spiderY = clickY - spider.offsetHeight / 2;

  if (
    spiderX < 0 ||
    spiderY < 0 ||
    spiderX + spider.offsetWidth > wall.offsetWidth ||
    spiderY + spider.offsetHeight > wall.offsetHeight
  ) {
    spiderX = Math.min(
      Math.max(spiderX, 0),
      wall.offsetWidth - spider.offsetWidth,
    );

    spiderY = Math.min(
      Math.max(spiderY, 0),
      wall.offsetHeight - spider.offsetHeight,
    );
  }

  spider.style.left = spiderX + 'px';
  spider.style.top = spiderY + 'px';

  const cursorX = spiderX + spider.offsetWidth / 2 + wall.offsetLeft;
  const cursorY = spiderY + spider.offsetHeight / 2 + wall.offsetTop;

  window.scrollTo(
    cursorX - window.innerWidth / 2,
    cursorY - window.innerHeight / 2,
  );
});
