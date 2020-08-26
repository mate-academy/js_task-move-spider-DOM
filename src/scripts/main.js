'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (event) => {
  if (event.target !== wall) {
    return;
  }

  let spiderLeft = event.offsetX - spider.offsetWidth / 2;
  let spiderRight = event.offsetY - spider.offsetHeight / 2;

  function isCorrect(direction, spiderSize, wallSize) {
    let x = direction;

    if (x < 0) {
      x = 0;
    } else if (x > wallSize - spiderSize) {
      x = wallSize - spiderSize;
    };

    return x;
  }

  spiderLeft = isCorrect(spiderLeft, spider.offsetWidth, wall.clientWidth);
  spiderRight = isCorrect(spiderRight, spider.offsetHeight, wall.clientHeight);

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderRight}px`;
});
