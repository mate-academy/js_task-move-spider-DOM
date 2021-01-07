'use strict';

document.addEventListener('click', e => {
  if (e.target.tagName === 'BODY') {
    return;
  }

  const spider = document.querySelector('.spider');
  const spiderX = spider.clientWidth;
  const spiderY = spider.clientHeight;

  const wall = document.querySelector('.wall');
  const wallX = wall.clientWidth;
  const wallY = wall.clientHeight;

  let x = e.offsetX;
  let y = e.offsetY;

  switch (true) {
    case (x < 0 + spiderX / 2) :
      x = 0 + spiderX / 2;
      break;
    case (x > wallX - spiderX) :
      x = wallX - spiderX / 2;
      break;
  }

  switch (true) {
    case (y < 0 + spiderY / 2) :
      y = 0 + spiderY / 2;
      break;
    case (y > wallY - spiderY) :
      y = wallY - spiderY / 2;
      break;
  }

  spider.style.top = `${y - spiderY / 2}px`;
  spider.style.left = `${x - spiderX / 2}px`;
});
