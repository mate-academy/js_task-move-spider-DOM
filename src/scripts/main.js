'use strict';


const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {

  const borderWidth = parseInt(window.getComputedStyle(wall).borderWidth);

  const rect = wall.getBoundingClientRect();
  const withinBorderX = e.clientX > rect.left + borderWidth && e.clientX < rect.right - borderWidth;
  const withinBorderY = e.clientY > rect.top + borderWidth && e.clientY < rect.bottom - borderWidth;

  if (withinBorderX && withinBorderY) {
    if (withinBorderX && withinBorderY) {
      const newTop = e.clientY - rect.top - borderWidth - (spider.offsetHeight / 2);
      const newLeft = e.clientX - rect.left - borderWidth - (spider.offsetWidth / 2);

      spider.style.top = `${newTop}px`;
      spider.style.left = `${newLeft}px`;
  }
  }
});
