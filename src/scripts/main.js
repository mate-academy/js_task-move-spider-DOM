'use strict';

document.getElementsByClassName('wall')[0].addEventListener('click', (e) => {
  // write code here
  const x = e.clientX;
  const y = e.clientY;
  let newX;
  let newY;

  const wall = document.getElementsByClassName('wall')[0];
  const spider = document.getElementsByClassName('spider')[0];

  if (
    x >
    wall.offsetLeft +
      wall.clientWidth +
      wall.clientLeft -
      spider.clientWidth / 2
  ) {
    newX = wall.clientWidth + wall.clientLeft - spider.clientWidth - 10;
  } else if (x < wall.offsetLeft + wall.clientLeft + spider.clientWidth / 2) {
    newX = 0;
  } else {
    newX = x - wall.offsetLeft - wall.clientLeft - spider.clientWidth / 2;
  }

  if (
    y >
    wall.offsetTop +
      wall.clientHeight +
      wall.clientTop -
      spider.clientHeight / 2
  ) {
    newY = wall.clientHeight + wall.clientTop - spider.clientHeight - 10;
  } else if (y < wall.offsetTop + wall.clientTop + spider.clientHeight / 2) {
    newY = 0;
  } else {
    newY = y - wall.offsetTop - wall.clientTop - spider.clientHeight / 2;
  }

  spider.style.top = newY + 'px';
  spider.style.left = newX + 'px';
});
