'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const wallStyle = getComputedStyle(wall);
  const wallWidth = parseFloat(wallStyle.width);
  const wallHeight = parseFloat(wallStyle.height);
  const wallBorder = (parseFloat(wallStyle.getPropertyValue('border-width')));
  const spider = document.querySelector('.spider');

  let coordX = e.clientX - wall.offsetLeft
  - (parseFloat(spider.width) / 2) - wallBorder;

  let coordY = e.clientY - wall.offsetTop
  - (parseFloat(spider.height) / 2) - wallBorder;

  if (coordX <= 0) {
    coordX = 0;
  }

  if (coordX >= wallWidth - spider.width) {
    coordX = wallWidth - spider.width;
  }

  if (coordY <= 0) {
    coordY = 0;
  }

  if (coordY >= wallHeight - spider.height) {
    coordY = wallHeight - spider.height;
  }

  if ((e.clientX - wall.offsetLeft >= 0
    && e.clientX - wall.offsetLeft - wallBorder * 2 <= wallWidth)
    && (e.clientY - wall.offsetTop >= 0
      && e.clientY - wall.offsetTop - wallBorder * 2 <= wallHeight)
  ) {
    spider.style.left = `${coordX}px`;
    spider.style.top = `${coordY}px`;
  }
});
