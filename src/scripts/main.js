'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const rect = wall.getBoundingClientRect();
  const spider = document.querySelector('.spider');
  const clickedThumb = e.target.closest('.wall');

  const borderWidth = parseFloat(getComputedStyle(wall).borderLeftWidth);

  const mouseX = e.clientX - rect.left - borderWidth;
  const mouseY = e.clientY - rect.top - borderWidth;

  const newX = mouseX - spider.offsetWidth / 2;
  const newY = mouseY - spider.offsetHeight / 2;

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  if (!clickedThumb) {
    return;
  }

  spider.style.left = `${Math.max(0, Math.min(newX, maxX))}px`;
  spider.style.top = `${Math.max(0, Math.min(newY, maxY))}px`;
});
