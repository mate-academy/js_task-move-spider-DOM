'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const wallCoords = wall.getBoundingClientRect();
  const spiderCoords = spider.getBoundingClientRect();
  const min = 0;
  const maxX = 350;
  const maxY = 350;

  const spiderXBorder
    = e.clientX - wallCoords.x - (spiderCoords.width / 2)
      - (wall.offsetWidth - wall.clientWidth) / 2;
  const spiderYBorder
    = e.clientY - wallCoords.y - (spiderCoords.height / 2)
      - (wall.offsetWidth - wall.clientWidth) / 2;

  spider.style.left = spiderXBorder + 'px';
  spider.style.top = spiderYBorder + 'px';

  if (spiderXBorder < min) {
    spider.style.left = '0px';
  };

  if (spiderYBorder < min) {
    spider.style.top = '0px';
  }

  if (spiderXBorder > maxX) {
    spider.style.left = '350px';
  };

  if (spiderYBorder > maxY) {
    spider.style.top = '350px';
  }
});
