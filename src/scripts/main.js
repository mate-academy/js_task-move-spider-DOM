'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wallCoords = wall.getBoundingClientRect();
  const spiderCoords = spider.getBoundingClientRect();
  const border = parseInt(
    window.getComputedStyle(wall).borderWidth.split('px').join(''),
  );
  let spiderY =
    e.clientY - wallCoords.top - parseInt(spider.offsetWidth) / 2 - border;
  let spiderX =
    e.clientX - wallCoords.left - parseInt(spider.offsetWidth) / 2 - border;

  if (e.target === wall) {
    spiderX = Math.max(spiderX, 0);

    spiderX = Math.min(
      spiderX,
      wallCoords.width - spiderCoords.width - border * 2,
    );
    spiderY = Math.max(spiderY, 0);

    spiderY = Math.min(
      spiderY,
      wallCoords.height - border * 2 - spiderCoords.height,
    );

    spider.style.top = spiderY + 'px';
    spider.style.left = spiderX + 'px';
  }
});
