'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  // write code here

  // console.log(e);

  let x = parseFloat(e.offsetY - spider.clientHeight / 2);
  let y = parseFloat(e.offsetX - spider.clientWidth / 2);
  const max = parseFloat(wall.clientWidth - spider.clientWidth);

  if (e.target.className !== 'wall') {
    return;
  };

  if (x < 0) {
    x = 0;
  };

  if (y < 0) {
    y = 0;
  };

  if (x > max) {
    x = max;
  };

  if (y > max) {
    y = max;
  };

  spider.style.top = `${x}px`;
  spider.style.left = `${y}px`;
});
