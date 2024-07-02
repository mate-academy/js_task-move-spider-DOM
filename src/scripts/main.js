'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;

const spiderHeight = spider.clientHeight;
const spiderWidth = spider.clientWidth;

const limitHeight = wallHeight - spiderHeight;
const limitWidth = wallWidth - spiderWidth;

wall.addEventListener('click', (e) => {
  const borderWidth = parseInt(window.getComputedStyle(wall).borderWidth);

  const rect = wall.getBoundingClientRect();
  const withinBorderX =
    e.clientX > rect.left + borderWidth && e.clientX < rect.right - borderWidth;
  const withinBorderY =
    e.clientY > rect.top + borderWidth && e.clientY < rect.bottom - borderWidth;

  if (withinBorderX && withinBorderY) {
    if (withinBorderX && withinBorderY) {
      let newTop = e.clientY - rect.top - borderWidth - spider.offsetHeight / 2;
      let newLeft =
        e.clientX - rect.left - borderWidth - spider.offsetWidth / 2;

      newTop = newTop > limitHeight ? limitHeight : newTop;
      newLeft = newLeft > limitWidth ? limitWidth : newLeft;

      newTop = newTop < 0 ? 0 : newTop;
      newLeft = newLeft < 0 ? 0 : newLeft;

      spider.style.top = `${newTop}px`;
      spider.style.left = `${newLeft}px`;
    }
  }
});
