'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wallSize = wall.getBoundingClientRect();
  const spiderSize = spider.getBoundingClientRect();
  const clickInWall = e.target.closest('.wall');

  if (!clickInWall) {
    return;
  }

  const wallStyle = getComputedStyle(wall);
  const borderTop = parseInt(wallStyle.borderTopWidth);
  const borderLeft = parseInt(wallStyle.borderLeftWidth);

  const halfSpiderWidth = spiderSize.width / 2;
  const halfSpiderHeight = spiderSize.height / 2;

  let positionX = e.clientX - wallSize.left - halfSpiderWidth - borderLeft;
  let positionY = e.clientY - wallSize.top - halfSpiderHeight - borderTop;

  positionX = Math.max(
    0,
    Math.min(positionX, wall.clientWidth - spiderSize.width),
  );

  positionY = Math.max(
    0,
    Math.min(positionY, wall.clientHeight - spiderSize.height),
  );

  spider.style.left = `${positionX}px`;
  spider.style.top = `${positionY}px`;
});
