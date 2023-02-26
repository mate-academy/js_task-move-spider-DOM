/* eslint-disable no-shadow */
'use strict';

const spider = document.querySelector('.spider');

const walls = document.querySelector('.wall');

walls.addEventListener('click', (event) => {
  const clickX = event.clientX - walls.offsetLeft;
  const clickY = event.clientY - walls.offsetTop;

  const newSpiderX = clickX - spider.offsetWidth / 2;
  const newSpiderY = clickY - spider.offsetHeight / 2;

  spider.style.left = `${newSpiderX}px`;
  spider.style.top = `${newSpiderY}px`;
});
