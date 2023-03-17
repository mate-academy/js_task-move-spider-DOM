'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const maxYCoord = wallHeight - spiderHeight;
  const maxXCoord = wallWidth - spiderWidth;

  const currentXCoord = e.offsetX;
  const currentYCoord = e.offsetY;

  if (!e.target.classList.contains('wall')) {
    return;
  };

  let spiderXCoord = currentXCoord - spiderWidth / 2;
  let spiderYCoord = currentYCoord - spiderHeight / 2;

  if (spiderXCoord < 0) {
    spiderXCoord = 0;
  };

  if (spiderYCoord < 0) {
    spiderYCoord = 0;
  };

  if (spiderXCoord > maxXCoord) {
    spiderXCoord = maxXCoord;
  };

  if (spiderYCoord > maxYCoord) {
    spiderYCoord = maxYCoord;
  }

  spider.style.top = spiderYCoord + 'px';
  spider.style.left = spiderXCoord + 'px';
});
