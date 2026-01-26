'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const width = wall.clientWidth - spider.offsetWidth;
  const height = wall.clientHeight - spider.offsetHeight;
  const rect = wall.getBoundingClientRect();

  if (e.target.classList.contains('wall')) {
    const x = e.clientX - rect.left - spider.offsetWidth / 2;
    const y = e.clientY - rect.top - spider.offsetHeight / 2;

    spider.style.left = `${Math.max(0, Math.min(width, x))}px`;
    spider.style.top = `${Math.max(0, Math.min(height, y))}px`;
  }
});
