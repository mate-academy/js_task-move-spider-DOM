'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallReact = wall.getBoundingClientRect();
  const wallStyle = getComputedStyle(wall);

  const borderLeft = parseInt(wallStyle.borderLeftWidth) || 0;
  const borderTop = parseInt(wallStyle.borderTopWidth) || 0;

  const x = e.clientX - wallReact.left - spider.width / 2 - borderLeft;
  const y = e.clientY - wallReact.top - spider.height / 2 - borderTop;

  spider.style.position = 'absolute';
  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
