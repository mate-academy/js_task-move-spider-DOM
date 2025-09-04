'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (ev) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  // Spider half width/height
  const halfW = spiderRect.width / 2;
  const halfH = spiderRect.height / 2;

  // Calculate center coordinates relative to wall
  let centerX = ev.clientX - wallRect.left;
  let centerY = ev.clientY - wallRect.top;

  // Clamp the center, not the top-left corner
  centerX = Math.max(halfW, Math.min(centerX, wallRect.width - halfW));
  centerY = Math.max(halfH, Math.min(centerY, wallRect.height - halfH));

  // Position spider so its center is at the clamped point
  spider.style.left = `${centerX - halfW}px`;
  spider.style.top = `${centerY - halfH}px`;
});
