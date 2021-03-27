'use strict';

function spiderRun() {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  wall.style.position = 'relative';

  spider.style.cssText = `
  position: absolute;
  left: 0;
  top: 0;
  transition: 1s all;
  `;

  wall.onclick = function(move) {
    const wallCooords = this.getBoundingClientRect();

    const spiderCoords = {
      top: move.clientY - wallCooords.top - wall
        .clientTop - spider.clientHeight / 2,
      left: move.clientX - wallCooords
        .left - wall.clientLeft - spider.clientWidth / 2,
    };

    if (spiderCoords.top < 0) {
      spiderCoords.top = 0;
    }

    if (spiderCoords.left < 0) {
      spiderCoords.left = 0;
    }

    if (spiderCoords.left + spider.clientWidth > wall.clientWidth) {
      spiderCoords.left = wall.clientWidth - spider.clientWidth;
    }

    if (spiderCoords.top + spider.clientHeight > wall.clientHeight) {
      spiderCoords.top = wall.clientHeight - spider.clientHeight;
    }

    spider.style.left = spiderCoords.left + 'px';
    spider.style.top = spiderCoords.top + 'px';
  };
};

spiderRun();
