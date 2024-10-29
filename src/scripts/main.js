'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallStyles = getComputedStyle(wall);
  const borderWidth = parseInt(wallStyles.borderWidth);
  const wallWidth = wall.offsetWidth;
  const wallHeight = wall.offsetHeight;
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const vh = window.innerHeight;
  const vw = window.innerWidth;
  const clickX =
    e.clientX - (vw / 2 - wallWidth / 2) - spiderWidth / 2 - borderWidth;
  const clickY =
    e.clientY - (vh / 2 - wallHeight / 2) - spiderHeight / 2 - borderWidth;

  const constrainedX = Math.max(
    0,
    Math.min(clickX, wallWidth - spiderWidth - 20),
  );
  const constrainedY = Math.max(
    0,
    Math.min(clickY, wallHeight - spiderHeight - 20),
  );

  if (e.target.closest('.wall')) {
    spider.style.top = `${constrainedY}px`;
    spider.style.left = `${constrainedX}px`;
  }
});
