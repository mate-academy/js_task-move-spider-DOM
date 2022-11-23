'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const wallWidth = wall.clientHeight;

  const spider = document.querySelector('.spider');
  const spiderHalfWidth = spider.clientHeight / 2;
  let spiderGoY = e.offsetY - spiderHalfWidth;
  let spiderGoX = e.offsetX - spiderHalfWidth;

  if (!e.target.classList.contains('wall')) {
    return;
  }

  if (e.offsetX <= spiderHalfWidth) {
    spiderGoX = 0;
  }

  if (wallWidth - e.offsetX <= spiderHalfWidth) {
    spiderGoX = wallWidth - spiderHalfWidth * 2;
  }

  if (e.offsetY <= spiderHalfWidth) {
    spiderGoY = 0;
  }

  if (wallWidth - e.offsetY <= spiderHalfWidth) {
    spiderGoY = wallWidth - spiderHalfWidth * 2;
  }

  spider.style.marginTop = `${spiderGoY}px`;
  spider.style.marginLeft = `${spiderGoX}px`;
});
