'use strict';

const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const wallTop = wallRect.top;
  const wallLeft = wallRect.left;
  const wallWidth = wallRect.width;
  const wallHeight = wallRect.height;
  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  const field = e.target.closest('.wall');

  if (!field) {
    return;
  }

  const border = wall.clientTop;

  const halfSpiderWidth = spiderWidth / 2;
  const halfSpiderHeight = spiderHeight / 2;

  let positionSpiderX = e.clientX - wallLeft - halfSpiderWidth - border;
  let positionSpiderY = e.clientY - wallTop - halfSpiderHeight - border;

  if (positionSpiderX < 0) {
    positionSpiderX = 0;
  }

  if (positionSpiderY < 0) {
    positionSpiderY = 0;
  }

  if (positionSpiderX + spiderWidth >= wallWidth) {
    positionSpiderX = wallWidth - spiderWidth - border * 2;
  }

  if (positionSpiderY + spiderHeight >= wallHeight) {
    positionSpiderY = wallHeight - spiderHeight - border * 2;
  }

  spider.style.left = `${positionSpiderX}px`;
  spider.style.top = `${positionSpiderY}px`;

  // console.log(e.clientX, e.clientY);
});
