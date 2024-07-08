/* eslint-disable no-shadow */
'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallCoords = wall.getBoundingClientRect();
  const spiderHalfHeight = spider.clientHeight / 2;
  const spiderHalfWidth = spider.clientWidth / 2;

  let top = e.clientY - wallCoords.top - wall.clientTop - spiderHalfHeight;
  let left = e.clientX - wallCoords.left - wall.clientLeft - spiderHalfWidth;

  top = Math.max(0, Math.min(top, wall.clientHeight - spider.clientHeight));
  left = Math.max(0, Math.min(left, wall.clientWidth - spider.clientWidth));

  spider.style.top = `${top}px`;
  spider.style.left = `${left}px`;
});
