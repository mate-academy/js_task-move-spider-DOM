'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  wall.style.position = 'relative';

  const rect = wall.getBoundingClientRect();

  const WALL_LENGTH = 400;
  const BORDER = 10;
  const SPIDER_WIDTH = 50;

  let wallX = e.clientX - rect.left;
  let wallY = e.clientY - rect.top;

  wallX = Math.max(
    BORDER + SPIDER_WIDTH / 2,
    Math.min(wallX, WALL_LENGTH - (SPIDER_WIDTH / 2 - BORDER)),
  );

  wallY = Math.max(
    BORDER + SPIDER_WIDTH / 2,
    Math.min(wallY, WALL_LENGTH - (SPIDER_WIDTH / 2 - BORDER)),
  );

  if (e.target.className === 'wall') {
    spider.style.left = wallX - (BORDER + SPIDER_WIDTH / 2) + 'px';
    spider.style.top = wallY - (BORDER + SPIDER_WIDTH / 2) + 'px';
  }
});
