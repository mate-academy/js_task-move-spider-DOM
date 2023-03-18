'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!e.target.closest('.wall')) {
    return;
  };

  const maxXCoord = wall.clientWidth - spider.clientWidth;
  const maxYCoord = wall.clientHeight - spider.clientHeight;

  let spiderYCoord = e.offsetY - (spider.clientHeight / 2);
  let spiderXCoord = e.offsetX - (spider.clientWidth / 2);

  if (spiderXCoord > maxXCoord) {
    spiderXCoord = maxXCoord;
  }
  
  if (spiderYCoord > maxYCoord) {
    spiderYCoord = maxYCoord;
  }

  if (spiderXCoord < 0) {
    spiderXCoord = 0;
  }

  if (spiderYCoord < 0) {
    spiderYCoord = 0;
  }

  spider.style.top = `${spiderYCoord}px`;
  spider.style.left = `${spiderXCoord}px`;
});
