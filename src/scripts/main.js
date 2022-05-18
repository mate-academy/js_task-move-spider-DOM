'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const distance = wall.getBoundingClientRect();
  const itemWidth = spider.clientWidth;
  const itemHeigth = spider.clientHeight;
  const style = getComputedStyle(wall);
  const wallBorderTop = parseFloat(style.borderTopWidth);
  const wallBorderLeft = parseFloat(style.borderLeftWidth);
  const wallHeight = parseFloat(style.height);
  const wallWidth = parseFloat(style.width);

  let moveHeigth = e.clientY - distance.top - itemHeigth / 2 - wallBorderTop;
  let moveWidth = e.clientX - distance.left - itemWidth / 2 - wallBorderLeft;

  if (moveHeigth >= wallHeight - itemHeigth) {
    moveHeigth = wallHeight - itemHeigth;
  }

  if (moveWidth >= wallWidth - itemWidth) {
    moveWidth = wallWidth - itemWidth;
  }

  if (moveHeigth < 0) {
    moveHeigth = 0;
  }

  if (moveWidth < 0) {
    moveWidth = 0;
  }

  if (e.target.className === 'wall') {
    spider.style.top = `${moveHeigth}px`;
    spider.style.left = `${moveWidth}px`;
  }
});
