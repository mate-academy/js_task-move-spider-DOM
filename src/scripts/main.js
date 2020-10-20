'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', moveSpider);

function moveSpider(event) {
  const spiderMaxCoordX = this.clientWidth - spider.clientWidth;
  const spiderMaxCoordY = this.clientHeight - spider.clientHeight;

  let coordX = event.offsetX - spider.offsetWidth / 2;
  let coordY = event.offsetY - spider.offsetWidth / 2;

  coordX = checkCoords(coordX, spiderMaxCoordX);
  coordY = checkCoords(coordY, spiderMaxCoordY);

  spider.style.left = `${coordX}px`;
  spider.style.top = `${coordY}px`;

  function checkCoords(currCoord, spiderMaxCoord) {
    let resultCoord = currCoord;

    if (currCoord < 0) {
      resultCoord = 0;
    }

    if (currCoord > spiderMaxCoord) {
      resultCoord = spiderMaxCoord;
    }

    return resultCoord;
  }
}
