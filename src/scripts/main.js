'use strict';

const spider = document.querySelector('.spider');
const clickableZone = document.querySelector('.wall');

clickableZone.addEventListener('click', (e) => {
  const rect = clickableZone.getBoundingClientRect();

  let x = e.clientX - rect.left - 10;
  let y = e.clientY - rect.top - 10;

  x -= spider.offsetWidth / 2;
  y -= spider.offsetHeight / 2;

  spider.style.transform = `translate(${x}px, ${y}px)`;
});
