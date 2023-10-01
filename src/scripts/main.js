'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  // Calculate the position relative to the wall's top-left corner
  const x = e.clientX - wall.getBoundingClientRect().left;
  const y = e.clientY - wall.getBoundingClientRect().top;

  // Calculate the spider's position to center it under the pointer
  const spiderX = x - spider.clientWidth / 2;
  const spiderY = y - spider.clientHeight / 2;

  // Ensure the spider stays within the boundaries of the wall
  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  const clampedX = Math.max(0, Math.min(spiderX, maxX));
  const clampedY = Math.max(0, Math.min(spiderY, maxY));

  // Set the spider's position
  spider.style.left = `${clampedX}px`;
  spider.style.top = `${clampedY}px`;
});

window.addEventListener('resize', () => location.reload());
