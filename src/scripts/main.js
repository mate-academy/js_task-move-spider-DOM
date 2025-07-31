'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallSize = wall.getBoundingClientRect();
  const spiderSize = spider.getBoundingClientRect();
  const clickInWall = e.target.closest('.wall');

  if (!clickInWall) {
    return;
  }

  const border = wall.clientTop;
  const halfSpiderWidth = spiderSize.width / 2;
  const halfSpiderHeight = spiderSize.height / 2;

  let positionX = e.clientX - wallSize.left - halfSpiderWidth - border;
  let positionY = e.clientY - wallSize.top - halfSpiderHeight - border;

  if (positionX < 0) {
    positionX = 0;
  }

  if (positionY < 0) {
    positionY = 0;
  }

  if (positionX + spiderSize.width >= wallSize.width) {
    positionX = wallSize.width - spiderSize.width - border * 2;
  }

  if (positionY + spiderSize.height >= wallSize.height) {
    positionY = wallSize.height - spiderSize.height - border * 2;
  }

  spider.style.left = `${positionX}px`;
  spider.style.top = `${positionY}px`;
});
