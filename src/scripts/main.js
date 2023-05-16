'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  e.target.addEventListener('click', eventio => {
    eventio.preventDefault();
  });

  if (e.target !== wall && e.target !== spider) {
    return 0;
  }

  const normalizeLeft = wall.offsetLeft
  + (wall.offsetWidth - wall.clientWidth) / 2 + spider.offsetWidth / 2;
  const normalizeTop = wall.offsetTop
  + (wall.offsetHeight - wall.clientHeight) / 2 + (spider.offsetHeight / 2);

  if (e.clientY - normalizeTop
    + spider.offsetHeight * 1.5 > wall.offsetHeight) {
    spider.style.cssText += `top: ${wall.offsetHeight
      - (spider.offsetHeight * 1.4)}px;`;
  } else if (e.clientY - spider.offsetHeight < wall.offsetTop) {
    spider.style.cssText += `top: 0px;`;
  } else {
    spider.style.cssText += `top: ${e.clientY - normalizeTop}px;`;
  }

  if (e.clientX - normalizeLeft + spider.offsetWidth * 1.5 > wall.offsetWidth) {
    spider.style.cssText += `left: ${wall.offsetWidth
      - (spider.offsetWidth * 1.4)}px;`;
  } else if (e.clientX - spider.offsetWidth < wall.offsetLeft) {
    spider.style.cssText += `left: 0px;`;
  } else {
    spider.style.cssText += `left: ${e.clientX - normalizeLeft}px;`;
  }
});
