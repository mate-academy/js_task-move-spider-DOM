'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const wallStyle = getComputedStyle(wall);
  const wallWidth = parseFloat(wallStyle.width);
  const wallHeight = parseFloat(wallStyle.height);
  const wallBorder = (parseFloat(wallStyle.getPropertyValue('border-width')));

  let x = e.clientX - wall.offsetLeft
  - (parseFloat(spider.width) / 2) - wallBorder;
  let y = e.clientY - wall.offsetTop
  - (parseFloat(spider.height) / 2) - wallBorder;

  (x <= 0) && (x = 0);
  (x >= wallWidth - spider.width) && (x = wallWidth - spider.width);
  (y <= 0) && (y = 0);
  (y >= wallHeight - spider.height) && (y = wallHeight - spider.height);

  if (wall.contains(e.target)) {
    spider.style.left = `${x}px`;
    spider.style.top = `${y}px`;
  }
});
