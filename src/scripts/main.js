'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const spiderWidth = +window.getComputedStyle(spider).width.slice(0, -2);
  const board = window.getComputedStyle(wall).width.slice(0, -2);

  const maxPosition = board - spiderWidth;
  const minPosition = spiderWidth / 2;

  if (e.target.className === 'wall') {
    let x = e.offsetX;
    let y = e.offsetY;

    switch (true) {
      case y > maxPosition:
        y = board - minPosition;
        break;
      case y < spiderWidth:
        y = minPosition;
        break;
    }

    switch (true) {
      case x > maxPosition:
        x = board - minPosition;
        break;
      case x < spiderWidth:
        x = minPosition;
        break;
    }

    spider.style.cssText = `transform: translate(-50%, -50%)`;
    spider.style.left = x + 'px';
    spider.style.top = y + 'px';
  }
});
