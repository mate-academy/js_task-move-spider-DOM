'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const wallRect = wall.getBoundingClientRect();
  const horBorder = (wall.offsetWidth - wall.clientWidth) / 2;
  const vertBorder = (wall.offsetHeight - wall.clientHeight) / 2;

  let newPosX = e.clientX - wallRect.left - horBorder - spider.clientWidth / 2;
  let newPosY = e.clientY - wallRect.top - vertBorder - spider.clientHeight / 2;

  newPosX = Math.max(newPosX, 0);
  newPosY = Math.max(newPosY, 0);
  newPosX = Math.min(newPosX, wall.clientWidth - spider.clientWidth);
  newPosY = Math.min(newPosY, wall.clientHeight - spider.clientHeight);

  spider.style.left = `${newPosX}px`;
  spider.style.top = `${newPosY}px`;
});
