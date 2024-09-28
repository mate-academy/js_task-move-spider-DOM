'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;
const maxX = wall.clientWidth - spiderWidth;
const maxY = wall.clientHeight - spiderHeight;
const wallBorderWidth = (wall.offsetWidth - wall.clientWidth) / 2;

document.addEventListener('click', e => {
  if (e.target.classList.contains('wall')) {
    const { top: wallTop, left: wallLeft } = wall.getBoundingClientRect();

    const spiderX = Math.max(
      0,
      Math.min(
        e.clientX - wallLeft - wallBorderWidth - (spiderWidth / 2),
        maxX,
      ),
    );

    const spiderY = Math.max(
      0,
      Math.min(
        e.clientY - wallTop - wallBorderWidth - (spiderHeight / 2),
        maxY,
      ),
    );

    spider.style.top = `${spiderY}px`;
    spider.style.left = `${spiderX}px`;
  }
});
