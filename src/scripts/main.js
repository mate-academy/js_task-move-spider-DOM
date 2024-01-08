'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const spiderX = (document.body.clientWidth - wall.clientWidth) / 2;
  const spiderY = (document.body.clientHeight - wall.clientHeight) / 2;

  const isWithinWall = (
    e.clientX >= spiderX
    && e.clientX <= spiderX + wall.clientWidth
    && e.clientY >= spiderY
    && e.clientY <= spiderY + wall.clientHeight
  );

  if (isWithinWall) {
    const positionX = e.clientX - spiderX - spider.offsetWidth / 2;
    const positionY = e.clientY - spiderY - spider.offsetHeight / 2;

    spider.style.top = `${Math.max(0,
      Math.min(positionY, wall.clientHeight - spider.offsetHeight))
      + window.scrollY}px`;

    spider.style.left = `${Math.max(0,
      Math.min(positionX, wall.clientWidth - spider.offsetWidth))
      + window.scrollX}px`;
  }
});
