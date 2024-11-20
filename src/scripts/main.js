'use strict';

const div = document.querySelector('div');
const spider = document.querySelector('img');

div.addEventListener('click', (e) => {
  const coords = div.getBoundingClientRect();

  const style = window.getComputedStyle(div);
  const border = parseInt(style.border);

  let x = e.clientX - coords.x - spider.offsetWidth / 2 - border;
  let y = e.clientY - coords.y - spider.offsetHeight / 2 - border;

  x = Math.max(0, Math.min(x, div.clientWidth - spider.offsetWidth));
  y = Math.max(0, Math.min(y, div.clientHeight - spider.offsetHeight));

  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
});
