'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');

  if (!spider) {
    return;
  }

  const target = e.target.closest('.wall');

  if (!target) {
    return;
  }

  const wallCoords = target.getBoundingClientRect();
  const spiderHalfWidth = spider.clientWidth / 2;
  const spiderHalfHeight = spider.clientHeight / 2;

  const spiderCoords = {
    left: Math.max(
      e.clientX - wallCoords.left - target.clientLeft - spiderHalfWidth,
      0,
    ),
    top: Math.max(
      e.clientY - wallCoords.top - target.clientTop - spiderHalfHeight,
      0,
    ),
  };

  spider.style.left =
    Math.min(spiderCoords.left, target.clientWidth - spider.clientWidth) + 'px';

  spider.style.top =
    Math.min(spiderCoords.top, target.clientHeight - spider.clientHeight) +
    'px';
});
