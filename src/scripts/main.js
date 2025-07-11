'use strict';

const walls = document.querySelector('.wall');
const spider = document.querySelector('.spider');

walls.addEventListener('click', (ev) => {
  const spiderBox = spider.getBoundingClientRect();

  const spiderWidth = spiderBox.width;
  const spiderHeight = spiderBox.height;

  const clickX = ev.offsetX;
  const clickY = ev.offsetY;

  const spiderX = Math.round(clickX - spiderWidth / 2);
  const spiderY = Math.round(clickY - spiderHeight / 2);

  const maxX = walls.clientWidth - spiderBox.width;
  const maxY = walls.clientHeight - spiderBox.height;

  const boundedX = Math.max(0, Math.min(spiderX, maxX));
  const boundedY = Math.max(0, Math.min(spiderY, maxY));

  spider.style.top = `${boundedY}px`;
  spider.style.left = `${boundedX}px`;
});
