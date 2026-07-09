'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const rect = wall.getBoundingClientRect();

  if (!wall.contains(e.target)) {
    return;
  }

  let x = e.clientX - rect.left - wall.clientLeft - spider.offsetWidth / 2;
  let y = e.clientY - rect.top - wall.clientTop - spider.offsetHeight / 2;

  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;

  // Обмеження руху рамками стіни
  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
