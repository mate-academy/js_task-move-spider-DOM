'use strict';

const wall = { el: document.querySelector('.wall') };
const spider = { el: document.querySelector('.spider') };

spider.height = spider.el.offsetHeight;
spider.width = spider.el.offsetWidth;
spider.midY = spider.el.offsetHeight / 2;
spider.midX = spider.el.offsetWidth / 2;

wall.edgeX = wall.el.clientWidth - spider.width;
wall.edgeY = wall.el.clientHeight - spider.height;

const coords = (eventX) => {
  if (eventX.target !== wall.el) {
    return [];
  }

  spider.coordsY = eventX.offsetY - spider.height / 2;
  spider.coordsY = Math.min(Math.max(spider.coordsY, 0), wall.edgeY);
  spider.coordsX = eventX.offsetX - spider.width / 2;
  spider.coordsX = Math.min(Math.max(spider.coordsX, 0), wall.edgeX);

  return [spider.coordsY + 'px', spider.coordsX + 'px'];
};

document.addEventListener('click', (eventX) => {
  [spider.el.style.top, spider.el.style.left]
  = coords(eventX);
});
