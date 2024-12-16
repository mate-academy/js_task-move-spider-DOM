'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();

  const newCoordLeft = e.clientX - spiderRect.width / 2;
  const newCoordTop = e.clientY - spiderRect.height / 2;

  const adjustedLeft = Math.max(
    wallRect.left,
    Math.min(newCoordLeft, wallRect.right - spiderRect.width),
  );

  const adjustedTop = Math.max(
    wallRect.top,
    Math.min(newCoordTop, wallRect.bottom - spiderRect.height),
  );

  spider.style.position = 'absolute';
  spider.style.left = `${adjustedLeft + window.scrollX}px`;
  spider.style.top = `${adjustedTop + window.scrollY}px`;
});
