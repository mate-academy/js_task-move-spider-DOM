'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const wallCoords = wall.getBoundingClientRect();
  const spiderCoords = spider.getBoundingClientRect();

  const spiderXBorder
    = e.clientX - wallCoords.x - (spiderCoords.width / 2)
      - (wall.offsetWidth - wall.clientWidth) / 2;
  const spiderYBorder
    = e.clientY - wallCoords.y - (spiderCoords.height / 2)
      - (wall.offsetWidth - wall.clientWidth) / 2;

  spider.style.left = spiderXBorder + 'px';
  spider.style.top = spiderYBorder + 'px';

  if (spiderXBorder < 0) {
    spider.style.left = '0px';
  };

  if (spiderYBorder < 0) {
    spider.style.top = '0px';
  }

  if (spiderXBorder > 350) {
    spider.style.left = '350px';
  };

  if (spiderYBorder > 350) {
    spider.style.top = '350px';
  }
});
