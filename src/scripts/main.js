'use strict';

document.addEventListener('click', (e) => {
  const target = e.target.closest('.wall');

  if (!target) {
    return;
  }

  const wallCoords = target.getBoundingClientRect();
  const spider = document.querySelector('.spider');

  const spiderCoords = {
    top: Math.max(
      e.clientY - wallCoords.top - target.clientTop - spider.clientHeight / 2,
      0,
    ),
    left: Math.max(
      e.clientX - wallCoords.left - target.clientLeft - spider.clientWidth / 2,
      0,
    ),
  };

  spider.style.left =
    Math.min(spiderCoords.left, target.clientWidth - spider.clientWidth) + 'px';

  spider.style.top =
    Math.min(spiderCoords.top, target.clientHeight - spider.clientHeight) +
    'px';
});
