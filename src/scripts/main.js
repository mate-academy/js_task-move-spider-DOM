'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', ev => {
  const wallPosition = wall.getBoundingClientRect();
  const wallX = wallPosition.x + wall.clientLeft;
  const wallY = wallPosition.y + wall.clientTop;

  let newTop = ev.clientY - wallY - (spider.offsetHeight / 2);
  let newLeft = ev.clientX - wallX - (spider.offsetWidth / 2);
  const newBottom = wall.clientHeight - spider.offsetHeight;
  const newRight = wall.clientWidth - spider.offsetWidth;

  newTop = newTop < 0 ? newTop = 0 : newTop;
  newTop = newTop > newBottom ? newTop = newBottom : newTop;
  newLeft = newLeft < 0 ? newLeft = 0 : newLeft;
  newLeft = newLeft > newRight ? newLeft = newRight : newLeft;

  spider.style.top = newTop + 'px';
  spider.style.left = newLeft + 'px';
});
