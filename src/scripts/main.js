'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const borderWidth = parseInt(window.getComputedStyle(wall)
    .getPropertyValue('border-width'));

  document.querySelector('.wall').addEventListener('click', e => {
    if (wall) {
      const x = e.clientX - wall.offsetLeft - spider.offsetWidth
        / 2 - borderWidth;
      const y = e.clientY - wall.offsetTop - spider.offsetHeight
        / 2 - borderWidth;

      const maxCoordsX = wall.clientWidth - spider.offsetWidth;
      const coordsX = Math.min(Math.max(x, 0), maxCoordsX);

      const maxCoodsY = wall.clientHeight - spider.offsetHeight;
      const coordsY = Math.min(Math.max(y, 0), maxCoodsY);

      spider.style = `
        top: ${coordsY}px;
        left: ${coordsX}px;
      `;
    }
  });
});
