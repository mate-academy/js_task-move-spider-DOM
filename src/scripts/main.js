'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  if (e.target.classList.contains('wall')) {
    const wallCoords = wall.getBoundingClientRect();
    const maxWallWidth = wall.clientWidth - spider.clientWidth;
    const maxWallHeight = wall.clientHeight - spider.clientHeight;
    let spiderX = e.clientX - wallCoords.x - spider.clientWidth / 2 - 10;
    let spiderY = e.clientY - wallCoords.y - spider.clientHeight / 2 - 10;

    if (spiderX > maxWallWidth) {
      spiderX = maxWallWidth;
    }

    if (spiderX < 0) {
      spiderX = 0;
    }

    if (spiderY > maxWallHeight) {
      spiderY = maxWallHeight;
    }

    if (spiderY < 0) {
      spiderY = 0;
    }

    spider.style.cssText = `transform: translate(${spiderX}px, ${spiderY}px);`;
  };
});
