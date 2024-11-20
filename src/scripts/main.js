'use strict';

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const spiderContainer = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const containerRect = spiderContainer.getBoundingClientRect();
  const x = e.clientX - containerRect.left - spiderContainer.clientLeft;
  const y = e.clientY - containerRect.top - spiderContainer.clientTop;
  const leftPosition = Math.max(
    0,
    Math.min(
      x - spider.clientWidth / 2,
      spiderContainer.clientWidth - spider.clientWidth,
    ),
  );
  const topPosition = Math.max(
    0,
    Math.min(
      y - spider.clientHeight / 2,
      spiderContainer.clientHeight - spider.clientHeight,
    ),
  );

  spider.style.left = `${leftPosition}px`;
  spider.style.top = `${topPosition}px`;
});
