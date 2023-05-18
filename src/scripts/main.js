'use strict';

const spider = document.querySelector('.wall').firstElementChild;
const wall = document.querySelector('.wall');
const normalizeOffset = (offset) => {
  if (offset < 0) {
    return 0;
  }

  if (offset > wall.clientWidth - spider.clientWidth) {
    return wall.clientWidth - spider.clientWidth;
  }

  return offset;
};

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  const x = normalizeOffset(e.offsetX - spider.clientWidth / 2);
  const y = normalizeOffset(e.offsetY - spider.clientHeight / 2);

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
