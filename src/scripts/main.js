'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();
  const borderWidth = parseInt(getComputedStyle(wall).borderWidth);

  let x = e.clientX - rect.left - spider.offsetWidth / 2 - borderWidth;
  let y = e.clientY - rect.top - spider.offsetHeight / 2 - borderWidth;

  if (e.clientX < borderWidth + rect.left + spider.offsetWidth / 2) {
    // console.log('border left');
    x = 0;
  } else if (e.clientX > rect.right - borderWidth - spider.offsetWidth / 2) {
    // console.log('border right');
    x = rect.right - rect.left - spider.offsetWidth - borderWidth * 2;
  }

  if (e.clientY < rect.top + borderWidth + spider.offsetHeight / 2) {
    // console.log('border top');
    y = 0;
  } else if (e.clientY > rect.bottom - borderWidth - spider.offsetHeight / 2) {
    // console.log('border bottom');
    y = rect.bottom - rect.top - spider.offsetHeight - borderWidth * 2;
  }

  // console.log('coords:', event.clientX, event.clientY);
  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
