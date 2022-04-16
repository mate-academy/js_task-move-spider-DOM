'use strict';

document.addEventListener('click', e => {
  // write code here
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!e.target.classList.contains('wall')) {
    return;
  }

  const wallCoords = {
    xLeft: wall.offsetLeft + wall.clientLeft,
    xRight: wall.offsetLeft + wall.clientLeft + wall.clientWidth,
    yTop: wall.offsetTop + wall.clientTop,
    yBottom: wall.offsetTop + wall.clientTop + wall.clientHeight,
  };

  const spiderHeight = spider.clientHeight;
  const spiderWidth = spider.clientWidth;
  let spiderY = e.offsetY;
  let spiderX = e.offsetX;

  if (e.clientY < wallCoords.yTop + (spiderHeight / 2)) {
    spiderY = spider.offsetHeight / 2;
  } else if (e.clientY > wallCoords.yBottom - (spiderHeight / 2)) {
    spiderY = wall.clientHeight - (spiderHeight / 2);
  }

  if (e.clientX < wallCoords.xLeft + (spiderWidth / 2)) {
    spiderX = spiderWidth / 2;
  } else if (e.clientX > wallCoords.xRight - (spiderWidth / 2)) {
    spiderX = wall.clientWidth - (spiderWidth / 2);
  }

  spider.style.top = `${spiderY}px`;
  spider.style.left = `${spiderX}px`;
  spider.style.transform = 'translate(-50%, -50%)';
});
