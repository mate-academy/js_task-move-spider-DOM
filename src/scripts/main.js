'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.offsetWidth;
const wallHeight = wall.clientHeight;
const wallBorder = wallWidth - wall.clientWidth;

const { x, y } = wall.getBoundingClientRect();

const spiderSize = spider.getBoundingClientRect();

wall.addEventListener('click', (e) => {
  const { clientX, clientY } = e;
  let offsetLeft = clientX - x - spiderSize.width / 2 - wallBorder / 2;
  let offsetTop = clientY - y - spiderSize.height / 2 - wallBorder / 2;

  console.log(offsetLeft, wallWidth, spiderSize.width, clientX);

  if (offsetLeft >= wallWidth - spiderSize.width - wallBorder / 2) {
    offsetLeft = wallWidth - spiderSize.width - wallBorder;
  }

  if (offsetLeft < 0) {
    offsetLeft = 0;
  }

  if (offsetTop >= wallHeight - spiderSize.height) {
    offsetTop = wallHeight - spiderSize.height;
  }

  if (offsetTop < 0) {
    offsetTop = 0;
  }

  spider.style.left = offsetLeft + 'px';
  spider.style.top = offsetTop + 'px';
});
