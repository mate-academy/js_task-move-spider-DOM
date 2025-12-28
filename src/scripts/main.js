'use strict';

document.addEventListener('click', (e) => {
  const box = document.querySelector('.wall');
  const spider = box.querySelector('.spider');
  const positioning = box.getBoundingClientRect();
  const border = Number.parseInt(getComputedStyle(box).borderWidth);

  if (e.target === box || e.target === spider) {
    let desiredX = e.clientX - positioning.x - border - spider.offsetWidth / 2;
    let desiredY = e.clientY - positioning.y - border - spider.offsetHeight / 2;

    if (
      e.clientX >
      positioning.x + box.offsetWidth - spider.offsetWidth / 2 - border
    ) {
      desiredX = box.offsetWidth - border * 2 - spider.offsetWidth;
    }

    if (
      desiredY >
      positioning.bottom - positioning.y - 2 * border - spider.offsetHeight
    ) {
      desiredY =
        positioning.bottom - positioning.y - 2 * border - spider.offsetHeight;
    }

    if (desiredX < 0) {
      desiredX = 0;
    }

    if (desiredY < 0) {
      desiredY = 0;
    }

    spider.style.left = `${desiredX}px`;
    spider.style.top = `${desiredY}px`;
  }
});
