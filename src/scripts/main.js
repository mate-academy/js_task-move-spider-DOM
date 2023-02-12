'use strict';

document.getElementsByClassName('wall')[0].addEventListener('click', e => {
  const spider = document.getElementsByClassName('spider')[0];
  const wall = document.getElementsByClassName('wall')[0];
  const borderWidth = parseInt(window.getComputedStyle(wall)
    .getPropertyValue('border-width'));

  if (wall) {
    const x = e.clientX - wall.offsetLeft - spider.offsetWidth
      / 2 - borderWidth;
    const y = e.clientY - wall.offsetTop - spider.offsetHeight
      / 2 - borderWidth;

    const maxX = wall.clientWidth - spider.offsetWidth;
    const resX = Math.min(Math.max(x, 0), maxX);

    const maxY = wall.clientHeight - spider.offsetHeight;
    const resY = Math.min(Math.max(y, 0), maxY);

    spider.style
      = `
      top: ${resY}px; left: ${resX}px;
    `;
  }
});
