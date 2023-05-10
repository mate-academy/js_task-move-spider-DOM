'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const pading = (wall.offsetWidth - wall.clientWidth) / 2;
  const wallX = wall.getBoundingClientRect().x;
  const wallY = wall.getBoundingClientRect().y;
  const spider = document.querySelector('.spider');

  if (!e.target.closest('.wall') || e.target.closest('.spider')) {
    return;
  }

  if (e.clientX <= pading + wallX + spider.clientWidth / 2) {
    spider.style.left = 0 + 'px';
  } else if (e.clientX >= wallX + wall.clientWidth - spider.clientWidth / 2) {
    spider.style.left = wall.clientWidth - spider.clientWidth + 'px';
  } else {
    spider.style.left = e.clientX - pading - wallX
    - spider.clientWidth / 2 + 'px';
  }

  if (e.clientY <= pading + wallY
  + spider.clientHeight / 2) {
    spider.style.top = 0 + 'px';
  } else if (e.clientY >= wallY + wall.clientHeight
  - spider.clientHeight / 2) {
    spider.style.top = wall.clientHeight - spider.clientHeight + 'px';
  } else {
    spider.style.top = e.clientY - pading - wallY
    - spider.clientHeight / 2 + 'px';
  }
});
