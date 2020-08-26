'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (event) => {
  const top = event.pageY - (window.innerHeight / 2) + 175;
  const left = event.pageX - (window.innerWidth / 2) + 175;

  spider.style.top = (top < 0) ? '0px' : (top > 350) ? '350px' : `${top}px`;
  spider.style.left = left < 0 ? '0px' : (left > 350) ? '350px' : `${left}px`;
});
