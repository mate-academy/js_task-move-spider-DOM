'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderSize = 50;

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  let x = e.clientX - wallRect.left - spiderSize / 2;
  let y = e.clientY - wallRect.top - spiderSize / 2;

  x = Math.max(0, Math.min(x, wallRect.width - spiderSize));
  y = Math.max(0, Math.min(y, wallRect.height - spiderSize));

  spider.style.transform = `translate(${x}px, ${y}px)`;
});
