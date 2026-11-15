'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const { left: leftx, top: topY } = wall.getBoundingClientRect();
  const wallBorderLeft = wall.clientLeft;
  const wallBorderTop = wall.clientTop;
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  if (e.target.closest('.wall')) {
    let valueX = Math.max(
      e.clientX - leftx - spiderWidth / 2 - wallBorderLeft,
      0,
    );

    valueX = Math.min(valueX, wall.clientWidth - spiderWidth);

    let valueY = Math.max(
      e.clientY - topY - spiderHeight / 2 - wallBorderTop,
      0,
    );

    valueY = Math.min(valueY, wall.clientHeight - spiderHeight);

    spider.style.top = `${valueY}px`;
    spider.style.left = `${valueX}px`;
  }
});
