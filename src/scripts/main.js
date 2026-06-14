'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

wall.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();

  const x = e.clientX - rect.left - wall.clientLeft;
  const y = e.clientY - rect.top - wall.clientTop;

  let l = x - spider.offsetWidth / 2;
  let t = y - spider.offsetHeight / 2;

  l = clamp(l, 0, wall.clientWidth - spider.offsetWidth);
  t = clamp(t, 0, wall.clientHeight - spider.offsetHeight);

  spider.style.left = `${l}px`;
  spider.style.top = `${t}px`;
});
