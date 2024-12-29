'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const container = e.target.closest('.wall');
  const spider = document.querySelector('.spider');

  if (!container) {
    return;
  }

  const leftX =
    e.offsetX + spider.offsetWidth / 2 > container.clientWidth
      ? container.clientWidth - spider.offsetWidth
      : e.offsetX - spider.offsetWidth / 2 <= 0
        ? 0
        : e.offsetX - spider.offsetWidth / 2;

  const topY =
    e.offsetY + spider.offsetHeight / 2 > container.clientHeight
      ? container.clientHeight - spider.offsetWidth
      : e.offsetY - spider.offsetHeight / 2 < 0
        ? 0
        : e.offsetY - spider.offsetHeight / 2;

  spider.style.left = leftX + 'px';
  spider.style.top = topY + 'px';
});
