'use strict';

function spiderRun() {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const fly = document.createElement('div');

  fly.style.cssText = `
  position: absolute;
  left: 0;
  top: 0;
  transition: 1s all;
  width: 50px;
  height: 50px;
  border: 2px solid black;
  border-radius: 50%;
  display: none;
  `;

  wall.append(fly);

  wall.onclick = function(move) {
    const wallCooords = this.getBoundingClientRect();

    const spiderCoords = {
      top: move.clientY - wallCooords.top - wall
        .clientTop - spider.clientHeight / 2,
      left: move.clientX - wallCooords
        .left - wall.clientLeft - spider.clientWidth / 2,
    };

    function runSpaider() {
      spider.style.left = spiderCoords.left + 'px';
      spider.style.top = spiderCoords.top + 'px';
    }

    setTimeout(runSpaider, 500);

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

    fly.style.display = 'block';
    fly.style.left = spiderCoords.left + 'px';
    fly.style.top = spiderCoords.top + 'px';
  };
};

spiderRun();
