'use strict';

const spider = document.getElementsByClassName('spider')[0];

const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();
  // write code here
  const leftPosition = e.clientX - rect.left;
  const rightPosition = e.clientY - rect.top;

  spider.style.left = leftPosition + 'px';
  spider.style.top = rightPosition + 'px';
});
