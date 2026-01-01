'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wallElement = document.querySelector('.wall');
  const wall = wallElement.getBoundingClientRect();
  const border = parseFloat(getComputedStyle(wallElement).borderWidth);

  if (
    e.clientX < wall.lefth ||
    e.clientX > wall.right ||
    e.clientY < wall.top ||
    e.clientY > wall.bottom
  ) {
    return;
  }

  const desiredLeft = e.clientX - wall.left - border - spider.width / 2;
  const desiredTop = e.clientY - wall.top - border - spider.height / 2;

  const wallWidth = wall.width - border * 2;

  const wallHeight = wall.height - border * 2;

  const maxLeft = wallWidth - spider.width;
  const maxTop = wallHeight - spider.height;

  const positionX = Math.max(0, Math.min(desiredLeft, maxLeft));
  const positionY = Math.max(0, Math.min(desiredTop, maxTop));

  spider.style.left = `${positionX}px`;
  spider.style.top = `${positionY}px`;
});
