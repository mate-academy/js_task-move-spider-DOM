/* eslint-disable max-len */
'use strict';

const body = document.body;
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// eslint-disable-next-line no-shadow
document.addEventListener('click', (event) => {
  const spiderX = (body.clientWidth - wall.clientWidth) / 2;
  const spiderY = (body.clientHeight - wall.clientHeight) / 2;

  let posX = event.clientX - spiderX;
  let posY = event.clientY - spiderY;

  if (wall.contains(event.target)) {
    posX = Math.max(spider.clientWidth / 2, Math.min(posX, wall.clientWidth - spider.clientWidth / 2));
    posY = Math.max(spider.clientHeight / 2, Math.min(posY, wall.clientHeight - spider.clientHeight / 2));

    posX -= spider.clientWidth / 2;
    posY -= spider.clientHeight / 2;

    spider.style.top = `${posY + window.scrollY}px`;
    spider.style.left = `${posX + window.scrollX}px`;
  }
});
