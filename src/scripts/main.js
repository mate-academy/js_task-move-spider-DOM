'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', moveSpider);

function moveSpider(event) {
  const spiderMaxCoordX = this.clientWidth - spider.offsetWidth;
  const spiderMaxCoordY = this.clientHeight - spider.offsetHeight;

  const coordX = event.offsetX - spider.offsetWidth / 2;
  const coordY = event.offsetY - spider.offsetHeight / 2;

  spider.style.left = `${checkCoords(coordX, spiderMaxCoordX)}px`;
  spider.style.top = `${checkCoords(coordY, spiderMaxCoordY)}px`;

  function checkCoords(currCoord, spiderMaxCoord) {
    if (currCoord < 0) {
      return 0;
    }

    if (currCoord > spiderMaxCoord) {
      return spiderMaxCoord;
    }

    return currCoord;
  }
}
