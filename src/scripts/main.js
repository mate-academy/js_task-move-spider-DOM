'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallCoords = wall.getBoundingClientRect();
  const wallLeft = wallCoords.left;
  const wallTop = wallCoords.top;

  const spiderCoords = spider.getBoundingClientRect();
  const spiderWidth = spiderCoords.width;
  const spiderHeight = spiderCoords.height;

  const clickX = e.clientX;
  const clickY = e.clientY;

  let spiderX = clickX - wallLeft - spiderWidth / 2;
  let spiderY = clickY - wallTop - spiderHeight / 2;

  spiderX = Math.max(0, Math.min(spiderX, wallCoords.width - spiderWidth));
  spiderY = Math.max(0, Math.min(spiderY, wallCoords.height - spiderHeight));

  spider.style.position = 'absolute';
  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
