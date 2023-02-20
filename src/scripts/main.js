'use strict';

document.addEventListener('click', e => {
  if (e.target.tagName === 'BODY') {
    return;
  }

  const wallElement = document.querySelector('.wall');
  const spiderElement = document.querySelector('.spider');

  const wallX = wallElement.getBoundingClientRect().x;
  const wallY = wallElement.getBoundingClientRect().y;

  const cursorX = e.clientX;
  const cursorY = e.clientY;

  const wallReduceSpider
    = parseInt(window.getComputedStyle(wallElement).width)
    - parseInt(window.getComputedStyle(spiderElement).width);
  const borderAndCenterSpider
    = parseInt(window.getComputedStyle(spiderElement).width) / 2
    + parseInt(window.getComputedStyle(wallElement).borderWidth);

  spiderElement.style.left
    = (cursorX - borderAndCenterSpider) < wallX ? 0
      : (cursorX - wallX - borderAndCenterSpider) + 'px';

  spiderElement.style.top = (cursorY - borderAndCenterSpider) < wallY ? 0
    : (cursorY - wallY - borderAndCenterSpider) + 'px';

  if (((cursorX - borderAndCenterSpider) - wallX) > wallReduceSpider) {
    spiderElement.style.left = wallReduceSpider + 'px';
  }

  if (((cursorY - borderAndCenterSpider) - wallY) > wallReduceSpider) {
    spiderElement.style.top = wallReduceSpider + 'px';
  }
});
