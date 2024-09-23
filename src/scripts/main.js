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
  const spiderHalfWidth = spider.offsetWidth / 2;
  const spiderHalfHeight = spider.offsetHeight / 2;

  const newLeft = Math.max(
    0,
    Math.min(
      e.clientX - wallCoords.left - spiderHalfWidth,
      target.clientWidth - spider.clientWidth,
    ),
  );

  const newTop = Math.max(
    0,
    Math.min(
      e.clientY - wallCoords.top - spiderHalfHeight,
      target.clientHeight - spider.clientHeight,
    ),
  );

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
