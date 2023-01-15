'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const wallCoords = wall.getBoundingClientRect();
  const spiderCoords = spider.getBoundingClientRect();
  const borderSize = (wall.offsetWidth - wall.clientWidth) / 2;
  const min = 0;
  const maxX = 350;
  const maxY = 350;

  const spiderXBorder
    = e.clientX - wallCoords.x - (spiderCoords.width / 2) - borderSize;
  const spiderYBorder
    = e.clientY - wallCoords.y - (spiderCoords.height / 2) - borderSize;

  spider.style.left = spiderXBorder + 'px';
  spider.style.top = spiderYBorder + 'px';

  if (spiderXBorder < min) {
    spider.style.left = min + 'px';
  };

  if (spiderYBorder < min) {
    spider.style.top = min + 'px';
  }

  if (spiderXBorder > maxX) {
    spider.style.left = maxX + 'px';
  };

  if (spiderYBorder > maxY) {
    spider.style.top = maxY + 'px';
  };
});
