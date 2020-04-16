'use strict';

function init(wall) {
  const spider = wall.querySelector('.spider');
  const scaredCulkin = wall.querySelector('.culkin');

  wall.addEventListener('click', (customEvent) => {
    if (customEvent.target !== customEvent.currentTarget) {
      return;
    }

    let x = customEvent.offsetX - (spider.offsetWidth / 2);
    let y = customEvent.offsetY - (spider.offsetHeight / 2);

    if (x < 0) {
      x = 0;
    }

    if (y < 0) {
      y = 0;
    }

    if (x >= wall.clientWidth - spider.offsetWidth) {
      x = wall.clientWidth - spider.offsetWidth;
    }

    if (y >= wall.clientHeight - spider.offsetHeight) {
      y = wall.clientHeight - spider.offsetHeight;
    }

    if (scaredCulkin.getAttribute('style')) {
      scaredCulkin.removeAttribute('style');
    } else {
      scaredCulkin.style.left = '500px';
    }

    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  });
}

init(document.querySelector('.wall'));
