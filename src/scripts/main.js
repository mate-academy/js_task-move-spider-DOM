'use strict';

function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallCoords = wall.getBoundingClientRect();

  const wallBorder = (wall.offsetWidth - wall.clientWidth) / 2;

  const x = clamp(
    e.clientX - wallCoords.left - spider.offsetWidth / 2 - wallBorder,
    0,
    wallCoords.width - spider.offsetWidth - wallBorder * 2,
  );

  const y = clamp(
    e.clientY - wallCoords.top - spider.offsetHeight / 2 - wallBorder,
    0,
    wallCoords.height - spider.offsetHeight - wallBorder * 2,
  );

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
