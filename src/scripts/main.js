'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  // write code here
  const wallBorder = parseInt(getComputedStyle(wall).borderWidth, 10);

  if (e.target.className === 'wall') {
    let spiderTop =
      e.clientY - wall.offsetTop - wallBorder - spider.clientHeight / 2;
    let spiderLeft =
      e.clientX - wall.offsetLeft - wallBorder - spider.clientWidth / 2;

    spiderTop = Math.max(
      0,
      Math.min(spiderTop, wall.clientHeight - spider.clientHeight),
    );

    spiderLeft = Math.max(
      0,
      Math.min(spiderLeft, wall.clientWidth - spider.clientWidth),
    );

    spider.style.top = `${spiderTop}px`;
    spider.style.left = `${spiderLeft}px`;
  }
});
