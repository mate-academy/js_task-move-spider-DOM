'use strict';

const container = document.querySelector('.wall');
const spider = document.querySelector('.spider');

container.addEventListener('click', (e) => {
  const rect = container.getBoundingClientRect();

  // eslint-disable-next-line
  const clickX = e.clientX - rect.left - container.clientLeft + container.scrollLeft;
  // eslint-disable-next-line
  const clickY = e.clientY - rect.top - container.clientTop + container.scrollTop;

  let x = clickX - spider.offsetWidth / 2;
  let y = clickY - spider.offsetHeight / 2;

  const maxX = container.clientWidth - spider.offsetWidth;
  const maxY = container.clientHeight - spider.offsetHeight;

  x = Math.min(maxX, Math.max(0, x));
  y = Math.min(maxY, Math.max(0, y));

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
