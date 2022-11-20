'use strict';

document.addEventListener('click', e => {
  if (e.target.classList.contains('wall')) {
    const spider = document.querySelector('.spider');
    const wall = document.querySelector('.wall');
    const wallCoords = wall.getBoundingClientRect();

    wallCoords.y += wall.clientTop;
    wallCoords.x += wall.clientLeft;

    let spiderCoordsX = e.clientX - spider.clientWidth / 2 - wallCoords.x;
    let spiderCoordsY = e.clientY - spider.clientHeight / 2 - wallCoords.y;

    if (spiderCoordsX + spider.clientWidth > wall.clientWidth) {
      spiderCoordsX = wall.clientWidth - spider.clientWidth;
    }

    if (spiderCoordsY + spider.clientHeight > wall.clientHeight) {
      spiderCoordsY = wall.clientHeight - spider.clientHeight;
    }
    spider.style.left = `${spiderCoordsX > 0 ? spiderCoordsX : 0}px`;
    spider.style.top = `${spiderCoordsY > 0 ? spiderCoordsY : 0}px`;
  }
});
