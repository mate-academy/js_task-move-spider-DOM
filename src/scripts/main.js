'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', function (e) {
  const wallDimentions = wall.getBoundingClientRect();

  let x = e.clientX - wallDimentions.left - spider.offsetWidth / 2;
  let y = e.clientY - wallDimentions.top - spider.offsetHeight / 2;

  x = Math.max(0, Math.min(x, wallDimentions.width - spider.offsetWidth));
  y = Math.max(0, Math.min(y, wallDimentions.height - spider.offsetHeight));

  spider.style.transform = `translate(${x}px, ${y}px)`;
});
