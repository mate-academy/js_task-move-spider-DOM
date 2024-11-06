'use strict';

document.addEventListener('click', (e) => {
  let x = e.clientX;
  let y = e.clientY;
  const spider = document.querySelector('.spider');
  const spiderCoords = spider.getBoundingClientRect();
  const wall = document.querySelector('.wall');
  const wallCoords = wall.getBoundingClientRect();

  x -= spiderCoords.width / 2;
  y -= spiderCoords.height / 2;

  x = Math.max(
    wallCoords.left,
    Math.min(x, wallCoords.right - spiderCoords.width),
  );

  y = Math.max(
    wallCoords.top,
    Math.min(y, wallCoords.bottom - spiderCoords.height),
  );

  spider.style.position = 'fixed';
  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
