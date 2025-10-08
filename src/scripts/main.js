'use strict';

const spider = document.querySelector('.spider');
const walls = document.querySelector('.wall');

const spiderCenter = {
  height: spider.clientHeight / 2,
  width: spider.clientWidth / 2,
};

const wallsSize = {
  height: walls.clientHeight,
  width: walls.clientWidth,
};

walls.addEventListener('click', (e) => {
  const spiderPosition = {
    x: e.offsetX - spiderCenter.width,
    y: e.offsetY - spiderCenter.height,
  };

  moveSpider(spiderPosition.x, spiderPosition.y);

  function moveSpider(x, y) {
    let posX = x;
    let posY = y;

    if (posX < spiderCenter.width) {
      posX = 0;
    } else if (posX > wallsSize.width - spiderCenter.width * 2) {
      posX = wallsSize.width - spiderCenter.width * 2;
    }

    if (posY < spiderCenter.height) {
      posY = 0;
    } else if (posY > wallsSize.width - spiderCenter.width * 2) {
      posY = wallsSize.width - spiderCenter.width * 2;
    }
    spider.style.top = `${posY}px`;
    spider.style.left = `${posX}px`;
  }
});
