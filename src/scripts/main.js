'use strict';

const img = document.querySelector('img');
const wall = document.querySelector('.wall');

wall.addEventListener('click', () => {
  wall.style.position = 'relative';
  img.style.left = 'event.clientX';
  img.style.top = 'event.clientY';
});
