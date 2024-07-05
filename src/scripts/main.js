'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const HAVF_SIZE_SPIDER = 25;
const BORDER = 10;

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  let x = e.clientX - wallRect.left - HAVF_SIZE_SPIDER;
  let y = e.clientY - wallRect.top - HAVF_SIZE_SPIDER;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > wallRect.width - HAVF_SIZE_SPIDER * 2 - BORDER) {
    x = wallRect.width - HAVF_SIZE_SPIDER * 2 - BORDER * 2;
  }

  if (y > wallRect.height - HAVF_SIZE_SPIDER * 2 - BORDER) {
    y = wallRect.height - HAVF_SIZE_SPIDER * 2 - BORDER * 2;
  }

  if (e.target === wall) {
    spider.style.cssText = `left: ${x}px; top: ${y}px`;
  }
});
