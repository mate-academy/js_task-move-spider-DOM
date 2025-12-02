'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = wall.style.position || 'relative';
spider.style.position = 'absolute';
spider.style.transform = 'translate(-50%, -50%)'; // center alignment

document.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();

  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  const halfW = spider.offsetWidth / 2;
  const halfH = spider.offsetHeight / 2;

  if (x < halfW) {
    x = halfW;
  }

  if (x > rect.width - halfW) {
    x = rect.width - halfW;
  }

  if (y < halfH) {
    y = halfH;
  }

  if (y > rect.height - halfH) {
    y = rect.height - halfH;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
