'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallRectangle = wall.getBoundingClientRect();

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    // eslint-disable-next-line no-useless-return
    return;
  }

  let spiderTop = e.clientY - wallRectangle.y - spider.clientHeight / 2;
  let spiderLeft = e.clientX - wallRectangle.x - spider.clientWidth / 2;

  if (spiderTop < 0) {
    spiderTop = 0;
  }

  if (spiderLeft < 0) {
    spiderLeft = 0;
  }

  if (spiderTop > wall.clientHeight - spider.clientHeight) {
    spiderTop = wall.clientHeight - spider.clientHeight;
  }

  if (spiderLeft > wall.clientWidth - spider.clientWidth) {
    spiderLeft = wall.clientWidth - spider.clientWidth;
  }

  spider.style.top = `${spiderTop}px`;
  spider.style.left = `${spiderLeft}px`;
});
