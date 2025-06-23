'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

document.addEventListener('click', (e) => {
  if (e.target.closest('.wall')) {
    const wallRect = wall.getBoundingClientRect();

    const clickX = e.clientX - wallRect.left;
    const clickY = e.clientY - wallRect.top;

    let spiderLeft = clickX - spiderWidth / 2;
    let spiderTop = clickY - spiderHeight / 2;

    spiderLeft = Math.max(
      0,
      Math.min(spiderLeft, wall.clientWidth - spiderWidth),
    );

    spiderTop = Math.max(
      0,
      Math.min(spiderTop, wall.clientHeight - spiderHeight),
    );

    spider.style.left = `${spiderLeft}px`;
    spider.style.top = `${spiderTop}px`;
  }
});
